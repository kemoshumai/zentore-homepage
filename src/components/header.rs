use leptos::{component, view, IntoView};

#[component]
pub fn HeaderComponent() -> impl IntoView{

    view! {
        <div class="w-full flex justify-center bg-sky-400 p-2" >
            <div class="bg-transparent">
                <a href="/">
                    <img src="./public/logo.png" class="bg-transparent h-12 w-auto" />
                </a>
            </div>
        </div>
    }

}