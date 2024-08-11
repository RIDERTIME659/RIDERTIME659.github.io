function  rider(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Nama tidak boleh kosong!')
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if(randomStatus === 0) {
            let rider = [
                'Rider_AGITO',
                'Rider_Ryuki',
                'Rider_FAIZ',
                'Rider_BLADE',
                'Rider_HIBIKI',
                'Rider_KABUTO',
                'Rider_DEN O',
                'Rider_KIVA',
                'Rider_DECADE',
                'Rider_W',
                'Rider_OOO/Ozu',
                'Rider_Fourze',
                'Rider_WIZARD',
                'Rider_GAIM',
                'Rider_DRIVE',
                'Rider_GHOST',
                'Rider_EXAID',
                'Rider_BUILD',
                'Rider_ZIO',
                'Rider_ZERO ONE',
                'Rider_SABER',
                'Rider_REVICE',
                'Rider_GEATS',
                'Rider_GOTCHARD',
                'Rider_ULTIMATE KUUGA',
                'Rider_BUILD GENIUS',
                'Rider_OHMA ZIO',
                'Rider_ZIO OHMA',
                'Rider_GRAND ZIO',
                'Rider_GEIZ',
                'Rider_WOZ',
                'Rider_MAJADE',
                'Rider_BUTTIN SWORD',
                'Rider_GEIZ REVIVE',
                'Rider_BUFFA',
                'Rider_GENM',
                'Rider_ZIO TRINITY',
                'Rider_LEGEND',
                'Rider_LIONSENKI',
                'Rider_ACCEL',
            ];
            const random = Math.floor(Math.random() * rider.length);
            $('#result').html(`${nama.toUpperCase()}  -'Rider Kamu (${rider[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function (){
    $('#btn-search').click(rider);
});