
function ajax_request(name){
    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                window.alert("AJAX non supportato!");
                return false;
            }
        }
    }
    name = name.toUpperCase();
    var parameters = "../php/insert_board.php?name=" + name + "&score="+ playerScore;
    xmlHttp.open("GET", parameters, true);
    xmlHttp.onreadystatechange = useHttpResponse;
    xmlHttp.send(null);

    function useHttpResponse() {
        if (xmlHttp.readyState == 4) {    
            window.location = "../php/leaderboard.php";
        }
    }
}