import {toHtml} from "hast-util-to-html";
import {ElementNode, parse} from "svg-parser";


function spriteToSvgService(file: File): Promise<{name: string, icon: string}[]> {
    const fileReader = (file: File): Promise<string> => {
        return new Promise<string>(resolve => {
            let fileReader: FileReader = new FileReader();
            fileReader.onloadend = ev => {
                const content = fileReader.result;
                if (typeof content == 'string') {
                    resolve(content);
                }
            }
            fileReader.readAsText(file, 'utf8');
        });
    }

    const fileParser = (fileContent: string): Promise<{name: string, icon: string}[]> => {
        return new Promise<any[]>(resolve => {
            const parsed = parse(fileContent);
            const svgElement: ElementNode = <ElementNode>parsed.children[0];
            const symbols = svgElement.children;
            let icons: {name: string, icon: string}[] = [];
            if (symbols) {
                symbols.map((symbol: any) => {
                   let name = symbol.properties.id;
                   symbol.tagName = "svg";
                   let iconHtml = toHtml(symbol);
                   icons.push({name: name, icon: iconHtml});
                });
            }
            resolve(icons);
        });
    }

    return new Promise<{name: string; icon: string}[]>(resolve => {
        fileReader(file).then((content) => {
            fileParser(content).then((icons) => {
                resolve(icons);
            })
        });
    });
}

export default spriteToSvgService;
