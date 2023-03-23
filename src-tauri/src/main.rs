#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri_plugin_sql::{Migration, MigrationKind};

fn main() {
  let _ctx = tauri::generate_context!();

  tauri::Builder::default()
    .plugin(tauri_plugin_sql::Builder::default().add_migrations(
      "sqlite:profile.db",
      vec![Migration {
        version: 1,
        description: "create feeds",
        sql: include_str!("./migrations/feeds.sql"),
        kind: MigrationKind::Up,
      }, Migration {
        version: 1,
        description: "create episodes",
        sql: include_str!("./migrations/episodes.sql"),
        kind: MigrationKind::Up,
      }],
    ).build())
    .run(_ctx)
    .expect("error while running tauri application");
}
