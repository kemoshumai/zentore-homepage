use leptos::*;

use crate::components::jumbotron::Jumbotron;

/// Default Home Page
#[component]
pub fn Home() -> impl IntoView {
    view! {
        <div class="bg-sky-700">
            <Jumbotron />
            <div class="bg-sky-500 h-96">
                <h2 class="bg-transparent text-5xl text-white font-bold" style="transform: rotate(-12deg) translateY(-48px); -webkit-text-stroke: 1px black; text-stroke: 1px black; ">"運動しながら"<br />"問題も解こう！！"</h2>
                <p class="bg-transparent">""</p>
            </div>
        </div>
    }
}
