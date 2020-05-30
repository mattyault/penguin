====================
HOW TO VIEW:
====================

To view, download the entire contents and open \index.htm in your browser.


====================
NOTES & LIMITATIONS
====================

1) The solution has been written in plain JavaScript, CSS and HTML.
2) The solution is set to display all the data in a single line across on the page and adapt to any viewport width for mobiles / tablets etc.
3) Without knowing compatibility the soution uses "flexbox" and "vw units" where "vw units" have been used, em and px alternatives have been specified as fallback values. It should render all the way back to IE 10!
4) The solution should handle any missing data for the books incuding the cover images which if found to be missing will display a default image instead.


====================
FUTURE ENHANCEMENTS
====================

1) Allowing for the display of more than 6 book items across the page.
2) More robust link checking when outputting the href. I noticed that one of the books had a URL pointing to "12345.html" which resulted in a 404 - I wrote a link checker to test this but because of Cross Origin requests it wouldn't actually work unless it was deployed to the actual Penguin website... So I removed it:

function isUrlValid(url){
	var urlTest = new XMLHttpRequest();
	urlTest.open("GET", url, true);
	urlTest.send(null);
	urlTest.onreadystatechange = function(){
		if (urlTest.readyState === 4 && urlTest.status === 200){
			return true;
		} else {
			return false;
		}
	}
}