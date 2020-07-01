/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { StackLayout, Label } from "@nativescript/core";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    page.eachChildView((child) => {
        if(child instanceof StackLayout){
            const label = new Label()
            label.fontSize = 72;
            // label.text = "Bonjour!";
            child.addChild(label);
            return false;
        }
        return true;
    })
}
