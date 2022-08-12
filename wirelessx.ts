/**
* Makecode Recieve Data from INEX's WirelessX 
*/

/**
 * WirelessX blocks
 */

//% weight=94 color=#F26522 icon="\uf11b"

namespace wirelessx {
/**
* Read Data from WirelessX.
*/
//% blockId="wireless_read" block="WirelessX Read"
//% weight=45 blockGap=8
export function reads()  {
    while (true) {
        while (serial.available() > 0) {
            const c = serial.read();
                return c;
        }
    }
}
 /**
 * Connects WirelessX.
 * @param TxD WirelessX receiver (TxD), eg: DigitalPin.P15
 * @param RxD WirelessX receiver (RxD), eg: DigitalPin.P16
 */
    //% blockId="wireless_connect" block="Connect WirelessX RxD %RxD"
    //% weight=50 blockGap=8
    export function connect(RxD:DigitalPin): void {
        serial.redirect(RxD-1, RxD as number, BaudRate.BaudRate9600);
    }
    
}
