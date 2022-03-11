const createSelectionBox: any = (): any => {
    const selectionBox = document.createElement('div');
    const boxClasses = [
        'absolute', 
        'w-[50%]',
        'min-w-[320px]',
        'max-w-[640px]', 
        'bg-neutral-50',
        'top-[50%]', 
        'left-[50%]',
        '-translate-x-1/2',
        '-translate-y-1/2', 
        'z-50',
        'font-medium',
        'text-center',
        'py-7',
        'px-2',
        'rounded-lg'
    
    ];
    selectionBox.classList.add(...boxClasses);
    selectionBox.setAttribute('id', 'actionBox');
    const boxMessage = document.createElement('p');
    boxMessage.innerText = "What do you want to do with your selection?";
    selectionBox.appendChild(boxMessage);
    return selectionBox;
}

const createActionButton: any = (value: string, callback: Function): any => {
    const actionButton = document.createElement('button');
    actionButton.innerText = value;
    actionButton.classList.add('w-[100px]', 'bg-blue-500', 'rounded-sm', 'text-white', 'font-medium', 'py-2', 'drop-shadow-lg');
    actionButton.addEventListener('click', () => {
        callback();
        const parentButton = document.getElementById('actionBox');
        parentButton?.parentNode?.removeChild(parentButton);
    });
    return actionButton;
} 

const createCloseButton: any = (value: string): any => {
    const actionButton = document.createElement('button');
    actionButton.innerText = value;
    actionButton.classList.add('w-[100px]', 'bg-blue-500', 'rounded-sm', 'text-white', 'font-medium', 'py-2', 'drop-shadow-lg');
    actionButton.addEventListener('click', () => {
        const parentButton = document.getElementById('actionBox');
        parentButton?.parentNode?.removeChild(parentButton);
    });
    return actionButton;
}

export { createSelectionBox, createActionButton, createCloseButton };
