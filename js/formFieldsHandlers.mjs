import { citySelectReceipt, citySelectSend } from "./formFiels.mjs";

export function handleCitySuggestionSelect(event) {
    const target = event.target;
    const parentBlockClassList = target.parentElement.className;

    if (parentBlockClassList.includes('send')) {
        citySelectSend.value = target.getAttribute('data-id');
    } else {
        citySelectReceipt.value = target.getAttribute('data-id');
    }
}