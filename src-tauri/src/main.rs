#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  let _ctx = tauri::generate_context!();

  tauri::Builder::default()
    .plugin(tauri_plugin_sql::Builder::default().build())
    .run(_ctx)
    .expect("error while running tauri application");
}
