var el = document.getElementById('next')


if (el)
{
	alert("Hello! I am an alert box!!");
 el.addEventListener("click",function()
 {
  chrome.runtime.sendMessage({type: "openTab",value:code},function(response)
  {

  });
  });
}