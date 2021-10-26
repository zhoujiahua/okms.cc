var scid = document.getElementById('sc');
if (scid) {
    scid.parentNode.removeChild(scid);
} else {
    var sc = document.createElement('script');
    sc.setAttribute('src', 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js');
    sc.id = 'sc';
    document.head.appendChild(sc);
}

$(function () {
    var ad = $('.pcshow');
    ad && ad.remove();
    var rkl = $('.rkl_rellist li'),
        localData = localStorage.localProverb,
        localProverb = localData ? JSON.parse(localData) : [];

    $.each(rkl, function (k, v) {
        var localLen = localProverb.length,
            prov = $(v).find('.proverb'),
            enText = prov.find('.en').text(),
            cnText = prov.find('.ch').text() || prov.find('.cn').text();
        if (cnText && cnText) {
            localProverb.push({
                id: localLen,
                en: enText,
                cn: cnText
            })
        }
    });
    localStorage.setItem('localProverb', JSON.stringify(localProverb));
    console.log(JSON.stringify(localProverb))
})