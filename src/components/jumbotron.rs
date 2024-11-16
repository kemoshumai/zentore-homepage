use leptos::{component, view, IntoView};

#[component]
pub fn Jumbotron() -> impl IntoView{

    view! {
        <div class="w-full bg-sky-200 flex flex-col justify-center" style="height:90svh;" >
            <div class="bg-transparent flex justify-center max-h-48">
                <div class="flex flex-col h-full bg-transparent">
                    <img class="bg-transparent h-full w-auto object-scale-down" src="./public/logo.png" />
                    <p class="text-center bg-transparent">"全部トレーニングですべてを鍛えよう。"</p>
                </div>
            </div>
        </div>
    }

}