use leptos::*;

use crate::components::jumbotron::Jumbotron;

/// Default Home Page
#[component]
pub fn Home() -> impl IntoView {
    view! {
        <div class="bg-sky-700">
            <Jumbotron />
        </div>
    }
}
