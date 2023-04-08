$(document).ready(function () {
    var state = 0;
    hideForms(state);

    {
        const input = document.getElementById('hue')
        const on = (ev, fn) => input.addEventListener(ev, fn)
        let lastEv = 'none';
        on('keydown', () => lastEv = 'keydown')
        on('mousedown', () => lastEv = 'mousedown')
        on('input', () => {
            if (lastEv === 'mousedown'); {
                dynamicChange(input.value, input.id);
                changeColors();
            }

            if (lastEv === 'keydown') {
                dynamicChange(input.value, input.id);
                changeColors();
            }
        });

    }

    {
        const input2 = document.getElementById('sat')
        const on2 = (ev, fn) => input2.addEventListener(ev, fn)
        let lastEv2 = 'none';
        on2('keydown', () => lastEv2 = 'keydown')
        on2('mousedown', () => lastEv2 = 'mousedown')

        on2('input', () => {
            if (lastEv2 === 'mousedown'); {
                dynamicChange(input2.value, input2.id);
                changeColors();
            }

            if (lastEv2 === 'keydown') {
                dynamicChange(input2.value, input2.id);
                changeColors();
            }
        });
    }

    {
        const input3 = document.getElementById('lig')
        const on3 = (ev, fn) => input3.addEventListener(ev, fn)
        let lastEv3 = 'none';
        on3('keydown', () => lastEv3 = 'keydown')
        on3('mousedown', () => lastEv3 = 'mousedown')

        on3('input', () => {
            if (lastEv3 === 'mousedown'); {
                dynamicChange(input3.value, input3.id);
                changeColors();
            }

            if (lastEv3 === 'keydown') {
                dynamicChange(input3.value, input3.id);
                changeColors();
            }
        });
    }

    {
        const input4 = document.getElementById('red')
        const on4 = (ev, fn) => input4.addEventListener(ev, fn)
        let lastEv4 = 'none';
        on4('keydown', () => lastEv4 = 'keydown')
        on4('mousedown', () => lastEv4 = 'mousedown')
        on4('input', () => {
            if (lastEv4 === 'mousedown'); {
                dynamicChange(input4.value, input4.id);
                changeColors();
            }

            if (lastEv4 === 'keydown') {
                dynamicChange(input4.value, input4.id);
                changeColors();
            }
        });
    }


    {
        const input5 = document.getElementById('green')
        const on5 = (ev, fn) => input5.addEventListener(ev, fn)
        let lastEv5 = 'none';
        on5('keydown', () => lastEv5 = 'keydown')
        on5('mousedown', () => lastEv5 = 'mousedown')
        on5('input', () => {
            if (lastEv5 === 'mousedown'); {
                dynamicChange(input5.value, input5.id);
                changeColors();
            }

            if (lastEv5 === 'keydown') {
                dynamicChange(input5.value, input5.id);
                changeColors();
            }
        });
    }

    {
        const input6 = document.getElementById('blue')
        const on6 = (ev, fn) => input6.addEventListener(ev, fn)
        let lastEv6 = 'none';
        on6('keydown', () => lastEv6 = 'keydown')
        on6('mousedown', () => lastEv6 = 'mousedown')
        on6('input', () => {
            if (lastEv6 === 'mousedown'); {
                dynamicChange(input6.value, input6.id);
                changeColors();
            }

            if (lastEv6 === 'keydown') {
                dynamicChange(input6.value, input6.id);
                changeColors();
            }
        });
    }




    $('.tab').click(function () {
        event.preventDefault();
        $('.tab').removeClass('tab-active');
        $(this).addClass('tab-active');
        changeState(this.id);
    });

    $('.inp').change(function () {
        //Find what was changed using the id
        let inp = '#' + this.id; // 
        let val = $(inp).val(); //
        let rootVar = '--' + this.id;

        $(':root').css(rootVar, val);

        //console.log(state);
        changeColors();

    });

    function dynamicChange(val, id) {
        let param = '--' + id;
        $(':root').css(param, val);

    }



    function changeColors() {
        let r, g, b, h, s, l, c0, c1;
        r = $(':root').css('--red');
        g = $(':root').css('--green');
        b = $(':root').css('--blue');
        h = $(':root').css('--hue');
        s = $(':root').css('--sat');
        l = $(':root').css('--lig');
        if (state === 0) {
            c0 = 'rgba(' + r + ', ' + g + ', ' + b + ', 1.0)';
            // console.log(c0);
            // console.log("called");

            let lm = ((0.2126 * r) + (0.7152 * g) + (0.0722 * b));
            //console.log("lm=" + lm);
            if (lm <= 60) {
                makeTheme('white');

            } else {
                makeTheme('black');

            }


            $('body').css('background-color', c0);
            convRGBtoALL(r, g, b, c0);

        } else {
            c1 = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
            // console.log(c1);
            // console.log("called2");
            if (l <= 50) {

                //$('body').css('color', 'white');
                makeTheme('white');


            } else {
                makeTheme('black');

            }
            $('body').css('background-color', c1);
            convHSLtoALL(h, s, l, c1);


        }


    }

    function convRGBtoALL(r, g, b, c) {

        $('.rgb-value').text(c);

        //HEX Change
        let hexCal = '#' + parseInt(r).toString(16).padStart(2, "0") + parseInt(g).toString(16).padStart(2, "0") + parseInt(b).toString(16).padStart(2, "0");
        $('.hex-value').text(hexCal.toUpperCase());

        $('.hsl-value').text(rgbToHsl(r, g, b));


    }


    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;

        const max = Math.max(r, g, b),
            min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        // round off the lightness value to two decimal places
        l = Math.round(l * 100) / 100;

        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    }



    function convHSLtoALL(h, s, l, c) {
        $('.hsl-value').text(c);
        let H = parseInt(h);
        let S = parseInt(s);
        let L = parseInt(l);
        $('.rgb-value').text(hslToRgbString(H, S, L));
        $('.hex-value').text(hslToHex(H, S, L).toUpperCase());
    }

    function hslToHex(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        const toHex = (x) => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return '#' + toHex(r) + toHex(g) + toHex(b);
    }

    function hslToRgbString(h, s, l) {
        // Convert hue to degrees
        h = h * 1.0 / 60;

        // Convert saturation and lightness to the range [0, 1]
        s = s * 1.0 / 100;
        l = l * 1.0 / 100;

        // Calculate chroma
        const chroma = (1 - Math.abs(2 * l - 1)) * s;

        // Calculate secondary values
        const x = chroma * (1 - Math.abs((h % 2) - 1));
        const m = l - chroma / 2;

        // Initialize r, g, and b to 0
        let r = 0,
            g = 0,
            b = 0;

        // Set r, g, and b based on the hue value
        if (h >= 0 && h < 1) {
            r = chroma;
            g = x;
        } else if (h >= 1 && h < 2) {
            r = x;
            g = chroma;
        } else if (h >= 2 && h < 3) {
            g = chroma;
            b = x;
        } else if (h >= 3 && h < 4) {
            g = x;
            b = chroma;
        } else if (h >= 4 && h < 5) {
            r = x;
            b = chroma;
        } else if (h >= 5 && h < 6) {
            r = chroma;
            b = x;
        }

        // Convert r, g, and b to the range [0, 255] and round to integers
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        // Return the RGBA string
        return `rgba(${r}, ${g}, ${b}, 1.0)`;
    }


    function makeTheme(color) {
        invert = color === 'white' ? 'black' : 'white';
        //console.log(invert);

        $(':root').css('--font-col', color);
        $(':root').css('--tab-col', 'transparent');
        $(':root').css('--font-active', invert);
        $(':root').css('--tab-active', color);
    }

    function changeState(some) {
        //console.log("New Active selected - " + some);
        if (some == "0") {
            state = 0;
            //RGB is active

        } else {
            state = 1;
            //HSL is active                       
        }
        hideForms(state);
        changeColors();
    }

    function hideForms(state) {
        if (state === 0) {
            $('.subsec-rgb').css('display', 'grid');
            $('.subsec-hsl').css('display', 'none');
        } else {
            $('.subsec-rgb').css('display', 'none');
            $('.subsec-hsl').css('display', 'grid');
        }

    }

    {
        $(".copy-me").each(function () {
            let copyObject = this;
            let textToCopy = this.innerText;
            //console.log(this.innerText);
            copyObject.addEventListener("click", function (textToCopy) {
                event.preventDefault();
                const text = this.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    console.log('Copied to clipboard: ' + text);
                }, () => {
                    console.error('Failed to copy to clipboard');
                });
            });
        });

    }


});