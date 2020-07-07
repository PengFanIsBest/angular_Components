class Print {
    constructor(element, configOtion = {}) {
        if (!(element instanceof HTMLElement)) {
            console.error('parmes is no instanceof HTMLElement');
            return;
        }
        this.Element = element;
        this.Config = configOtion;
        // this.onPrint();
    }
    getStyle() {
        let str = '';
        const styles = document.querySelectorAll('style,link');
        for (let i = 0; i <= styles.length - 1; i++) {
            str += styles[i].outerHTML;
        }
        str += '<style>' + '.no-print' + '{display:none;}</style>';
        return str;
    }

    getHtml() {
        return this.Element.innerHTML;
    }

    onPrint() {
        const content = this.getStyle() + this.getHtml();
        this.writeIframe(content);
    }

    writeIframe(content) {
        let w;
        let doc;
        const iframe = document.createElement('iframe');
        const f = document.body.appendChild(iframe);
        iframe.id = 'myIframe';
        // iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
        w = f.contentWindow || f.contentDocument;
        doc = f.contentDocument || f.contentWindow.document;
        doc.open();
        doc.write(content);
        doc.close();
        this.toPrint(w, () => {
            document.body.removeChild(iframe);
        });
    }
    toPrint(w, cb) {
        const _this = this;
        w.onload = () => {
            try {
                setTimeout(() => {
                    w.focus();
                    if (typeof _this.onStart === 'function') {
                        _this.onStart();
                    }
                    if (!w.document.execCommand('print', false, null)) {
                        w.print();
                    }
                    if (typeof _this.onEnd === 'function') {
                        _this.onEnd();
                    }
                    w.close();
                    if (cb) {
                        cb();
                    }
                });
            } catch (err) {
                _this.onError(err);
            }
        };
    }
    onError(r) {
        setTimeout(() => {
            console.error(r);
        }, 0);
    }
    onStart() {
        console.log('开始');
    }
    onEnd() {
        console.log('结束');
    }
}

window.Print = Print;
