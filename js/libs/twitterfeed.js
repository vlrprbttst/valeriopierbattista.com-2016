$(document).ready(function() {
    function j(a) {
        return a = a.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(a) {
            return '<a href="' + a + '" >' + a + "</a>"
        }), a = a.replace(/\B@([_a-z0-9]+)/gi, function(a) {
            return '<a href="http://twitter.com/' + a.substring(1) + '" style="font-weight:lighter;" >' + a.charAt(0) + a.substring(1) + "</a>"
        })
    }

    function k(a) {
        var b = a.split(" ");
        a = b[1] + " " + b[2] + ", " + b[5] + " " + b[3];
        var c = Date.parse(a),
            d = arguments.length > 1 ? arguments[1] : new Date,
            e = parseInt((d.getTime() - c) / 1e3),
            f = a.substr(4, 2) + " " + a.substr(0, 3);
        return e += 60 * d.getTimezoneOffset(), 60 > e ? "1m" : 120 > e ? "1m" : 3600 > e ? parseInt(e / 60).toString() + "m" : 7200 > e ? "1h" : 86400 > e ? parseInt(e / 3600).toString() + "h" : 172800 > e ? f : f
    }
    var a = 3,
        b = "vlrprbttst",
        c = "valerio",
        d = !1,
        e = !1,
        f = !0,
        h = "",
        i = "";
    h += "<h1>" + c + ' <span style="font-size:13px"><a href="https://twitter.com/' + b + '" >@' + b + "</a></span></h1>", i += '<div id="loading-container"><img src="images/ajax-loader.gif" alt="tweet loader" /></div>', $("#twitter-feed").html(h + i), $.getJSON("get-tweets.php", function(b) {
        for (var c = "", g = 1, i = 0; i < b.length; i++) {
            var l = b[i].user.name,
                m = b[i].user.screen_name,
                n = b[i].user.profile_image_url_https,
                o = b[i].text,
                p = !1,
                q = !1,
                r = b[i].id_str;
            "undefined" != typeof b[i].retweeted_status && (n = b[i].retweeted_status.user.profile_image_url_https, l = b[i].retweeted_status.user.name, m = b[i].retweeted_status.user.screen_name, r = b[i].retweeted_status.id_str, p = !0), "@" == b[i].text.substr(0, 1) && (q = !0), (1 == e || 0 == p && 0 == e) && (1 == d || 0 == d && 0 == q) && b[i].text.length > 1 && a >= g && (1 == f && (o = j(o)), 1 == g && (c += h), c += '<div class="twitter-article">', c += '<div class="twitter-pic"><a href="https://twitter.com/' + m + '" ><img src="' + n + '"images/twitter-feed-icon.png" width="42" height="42" alt="twitter icon" /></a></div>', c += '<div class="twitter-text"><p><span class="tweetprofilelink"><strong><a href="https://twitter.com/' + m + '" >' + l + '</a></strong> <a href="https://twitter.com/' + m + '" >@' + m + '</a></span><span class="tweet-time"><a href="https://twitter.com/' + m + "/status/" + r + '">' + k(b[i].created_at) + "</a></span><br/>" + o + "</p></div>", c += "</div>", g++)
        }
        $("#twitter-feed").html(c)
    })
});
