
function runhtml() {
    var myWindow1 = window.open('', 'Your Code', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
   var codebox = document.getElementById("codebox")
    myWindow1.document.write(codebox.value);
}
