use leptos::*;

/// 404 Not Found Page
#[component]
pub fn NotFound() -> impl IntoView {
    view! { 
        <div class="text-center flex flex-col gap-2 mt-36">
            <h1 class="text-4xl my-12">"404 Not Found"</h1>
            <p class="text-2xl">"浪人生にはページを見つけることができなかった。"</p>
            <a class="text-2xl" href="/">"トップページへ"</a>
        </div>
    }
}
