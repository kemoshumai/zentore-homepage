use leptos::*;

/// 404 Not Found Page
#[component]
pub fn NotFound() -> impl IntoView {
    view! { 
        <div>
            <h1>"404 Not Found"</h1>
            <p>"浪人生にはページを見つけることができなかった。"</p>
            <a href="/">"トップページへ"</a>
        </div>
    }
}
