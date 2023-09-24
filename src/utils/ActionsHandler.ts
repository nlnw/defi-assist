export function handleAction(action: string) {
    const actionClean = action.toLocaleLowerCase().replace(/\./g, "").trim();
    switch (actionClean) {
        case "connect":
            alert("connecting metamask!");
            break;
    }
}
