﻿export function hide(element: HTMLElement, scrollType: number) {
    if (scrollType === 1) {
        element.classList.add("blazor-javascript-v-no-overflow");
    } else if (scrollType === 2) {
        element.classList.add("blazor-javascript-h-no-overflow");
    } else {
        element.classList.add("blazor-javascript-v-no-overflow");
        element.classList.add("blazor-javascript-h-no-overflow");
    }
}

export function show(element: HTMLElement, scrollType: number) {
    if (scrollType === 1) {
        element.classList.remove("blazor-javascript-v-no-overflow");
    } else if (scrollType === 2) {
        element.classList.remove("blazor-javascript-h-no-overflow");
    } else {
        element.classList.remove("blazor-javascript-v-no-overflow");
        element.classList.remove("blazor-javascript-h-no-overflow");
    }
}

export function hideScrollOverflowByTag(tagName: string, scrollType: number) {
    if (tagName === "body") {
        hide(document.body, scrollType);
    } else {
        const elements = document.getElementsByTagName(tagName) as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elements.length; i++) {
            hide(elements[i], scrollType);
        }
    }
}

export function hideScrollOverflowByClass(className: string, scrollType: number) {
    if (className === "body") {
        hide(document.body, scrollType);
    } else {
        const elements = document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elements.length; i++) {
            hide(elements[i], scrollType);
        }
    }
}

export function showScrollOverflowByTag(tagName: string, scrollType: number) {
    if (tagName === "body") {
        show(document.body, scrollType);
    } else {
        const elements = document.getElementsByTagName(tagName) as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elements.length; i++) {
            show(elements[i], scrollType);
        }
    }
}

export function showScrollOverflowByClass(className: string, scrollType: number){
    if (className === "body") {
        show(document.body, scrollType);
    } else {
        const elements = document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elements.length; i++) {
            show(elements[i], scrollType);
        }
    }
}

export function hideBodyScrollOverflow(scrollType: number) {
    hide(document.body, scrollType);
}

export function showBodyScrollOverflow(scrollType: number) {
    show(document.body, scrollType);
}
