function scanQR() {
    window.location.href = '/scanner.html';
}

//this function will be called when JsQRScanner is ready to use
function JsQRScannerReady() {
    function onQRCodeScanned(scannedText) {
        if (jbScanner) {
            jbScanner.stopScanning();
            if (confirm("Scanned this:\n" + scannedText)) {
                window.location.href = 'https://www.adptts.com/align-probiotic';
            } else {
                jbScanner.resumeScanning();
            }
        }
    }
    var scannerParentElement = document.getElementById("scanner");
    if(scannerParentElement)
    {
        var jbScanner = new JsQRScanner(onQRCodeScanned);
        jbScanner.setSnapImageMaxSize(300);
        jbScanner.appendTo(scannerParentElement);
    }        
}