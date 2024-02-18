function isHidden(e) {

    var style = window.getComputedStyle(e)

    return (style.display === 'none')

}



function activate(key) {

    console.log('\n===== Ativação ' + key + ' =====')

    document.getElementById('product_key').value = key

    if (document.getElementById('accept_ssa').checked === false) {

        document.getElementById('accept_ssa').click()

    }

    setTimeout(function () {

        document.getElementById('register_btn').click()

    }, 100)

}



function checkPage(s) {

    console.log('...')

    let errorDisplay = document.getElementById('error_display')

    let receiptForm = document.getElementById('receipt_form')

    let registerForm = document.getElementById('registerkey_form')



    if (!isHidden(receiptForm)) {

        s.wait = false

        console.log(receiptForm.firstElementChild.textContent.trim())

        console.log(document.getElementById('registerkey_productlist').textContent)

        DisplayPage('code') // Mostra o registerkey_form

    } else if (!isHidden(registerForm)) {

        if (s.wait && !isHidden(errorDisplay)) {

            s.wait = false

            console.log(errorDisplay.textContent)

            errorDisplay.style.display = "none" // ocultar antes de ativar a próxima chave (caso contrário, não esperaremos adequadamente que o receipt_form apareça)

        }

        if (!s.wait) {

            if (s.index === s.keys.length) return

            s.wait = true

            activate(s.keys[s.index++])

        }

    }



    setTimeout(function () { checkPage(s) }, 500)

}



checkPage({

    index: 0,

    wait: false,

    keys: [

        'OMZVF-IH8DF-VKT1D',

        'QFHWZ-ZO2HI-IOOOY',

        'NHKJW-2XW9T-PI6I7',

        'S13SX-A8VJO-XHA36',

        '0THFW-2VUOY-G9L5M',

        'G03GA-O0MI7-TGM5B',

        'LXBE3-7RVV6-4H5IA',

        'UBO2N-VOLK1-CP8IQ',

        '39P7O-SDQ5W-QYD7B',

        '60XA2-OD5IN-WSAW6',

        'RI6MW-P449J-T0N3X',

        'L4W0W-3SGYR-I8G4Q',

        '0YWT4-PNVDK-DKTPH',

'1XRG6-B2SEM-APCBS',

'C1X3T-0LHNO-X65X0',

'9Q16Y-Z3DSV-1TZHF',

'PO2BQ-CMO2C-GFMX4',

'G3UE1-DZGTV-CPI0C',

'3ZIBD-A5YSX-28958',

'5ND6C-5ZY9O-G3AU8',

'VWMQI-EV4VX-3M1NS',

'A4BIO-PXBZK-JPYGO',

'TE3XJ-2F8G3-3LXBY',

'BP3DO-C5TYU-C241V',

'5PQ78-ZDIVS-BXVWR',

'31UFO-SB4R8-Y3AKH',

'ILUBR-MZI1P-OINNZ',

'06QMR-J4YST-FYKSW',

'4P1DQ-VHVXP-P74FR',

'SG4I0-L8OCR-0GFSC',

'PT5U0-0COKY-TFJMF',

'H5OVV-6HWKC-W8WB8',

'K3QTW-NAFTG-52TGA',

'BFVZE-1QACJ-ENYVL',

'6ECXH-4ISC7-RTKDM',

'84AU2-QE0YY-JEF4K',

'AWKOJ-SLBNI-H4AB2',

'3NY41-JNQIN-V221Y',

'KEPPR-NDOA5-MT3DS',

'K1W5Y-NQ2E3-KJQ52',

'F5LQW-E1ISE-EBKAU',

'2X45Z-AXOO4-UBX8X',

'RUEKR-4D6Z5-0UMLF',

'7TCQI-AZG1F-JQ805',

'HA4HW-0U5QD-O1QMG',

'9F2TI-M8J71-GT173',

'C3OX1-721P7-5X148',

'9AOVB-TVHK5-ZLOFI',

'AGONL-960S8-DH2QG',

'DRTGX-540EZ-1FJVB',

'RG0N1-ER8Y5-55QE6',

'UFKN9-NCKS4-VPCV8',

'MQPPT-4W6BS-J48TE',

'1XNT6-VH4H7-DMU30',

'D4JU5-JMU3Y-574DL',

'SU7Z0-IUPS1-HTJYZ',

'9OHXV-31VTT-R3DT3',

'VBZSE-6AL94-B80OU',

'R0O63-BBSM1-BUOO2',

'XDTLI-B1AIA-0BRUJ',

'JILWX-O7KGW-KHUTD',

'CY5KQ-TU9T4-MVVY8',

'ROPGD-MH6DJ-FR0JZ',

'ZPTE1-ARJJ0-KAEMD',

'PW012-17POZ-S705V',

'6BV2Z-P42H4-3Y86V',

'O5N8M-LIRFH-INLSW',

'OJU14-BFXCY-2MN1H',

'C9K2P-8TEYP-FGKW1',

'M1583-C76N8-IGPHL',

'TWH15-OYPHG-HWNMO',

'BRTA8-5JERX-GEA15',

'JBG8W-UEU4O-QNC4X',

'6IVCT-275YQ-OXYHN',

'A77Y5-2YO7D-1WMBN',

'ZQO9B-O36TE-EO03C',

'TPVZ7-FVDGM-C72VW',

'EMAK5-3492C-O457C',

'ONCXS-0HBLF-8V1UC',

'0OKSC-Y9SDV-X6I6L',

'VP36C-JUJ9C-FLH9L',

'LX86V-GSCT5-U28M7',

'QWO2D-222Z7-FQD31',

'V2OCK-Z4N78-HNYDB',

'2ZAQC-G2L3F-P46XY',

'MLCH5-1R5B9-ZF5HS',

'XX37Y-23YUQ-ETZ9G',

'8LYBP-LH1FM-X9S59',

'AGTZ9-E0OMY-I2WKG',

'BV1I1-TU7Z7-WIITB',

'90OIZ-OLFVP-7DWAF',

'UODX8-TTD3I-V7KXW',

'J649N-VCGIV-2Z48Z',

'R6G69-KQ3Q8-H16T6',

'B17HO-DNEYY-MC8UH',

'JJI21-FFQRP-RBYDM',

'IOQE8-OHFST-R3PTE',

'43MF5-9DOQK-ZHLC5',

'OFFH7-YAMRG-ER1CI',

'UHNST-OUBD2-LCQ0W',

    ]

})

