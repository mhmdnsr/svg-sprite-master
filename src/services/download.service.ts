import {saveAs} from 'file-saver'
import JSZip from "jszip";

export function downloadIcon(icon: {name: string, icon: string}) {
    let iconFile = new Blob([icon.icon], {
        type: 'image/svg+xml'
    });
    saveAs(iconFile, `${icon.name}.svg`);
}

export function downloadAllIcons(icons: {name: string, icon: string}[]) {
    let iconsZip = new JSZip();
    icons.map((icon) => {
        let iconFile = new Blob([icon.icon], {
            type: 'image/svg+xml'
        });
        iconsZip.file(`${icon.name}.svg`, iconFile);
    });
    iconsZip.generateAsync({type: 'blob'}).then((zipFileContent) => {
       saveAs(zipFileContent, 'sprite-parsed-svgs.zip');
    });
}
