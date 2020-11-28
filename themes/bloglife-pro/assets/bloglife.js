
window.onload = () => {

	var chapters = document.querySelectorAll("h2,h3,h4");

	var secTopArr = Array.from(chapters).map(chapter => {
		return offsetTop(chapter)
	})

	// sort (ascend)
	secTopArr.sort((a, b) => (a < b ? -1 : 1));

	var liList = document.querySelectorAll(".toc li")
	var aList = document.querySelectorAll(".toc a")

	window.onscroll = () => {

		var scrollOffset = getScrollTop()

		if (liList.length > 0) {
			// clear decoration
			Array.from(liList).map(li => li.classList.remove("current"))
			Array.from(aList).map(a => a.classList.remove("current"))

			for (var i = secTopArr.length - 1; i >= 0; i--) {

				if (secTopArr[i] < scrollOffset + 120) {
					liList[i].classList.add("current")
					liList[i].querySelector("a").classList.add("current")
					break;
				}
			}
		}
	}
};

window.addEventListener('hashchange', function () {
	window.scrollBy(0, -60)
}, false);

function getScrollTop() {
	return document.documentElement.scrollTop || document.body.scrollTop
}

function offsetTop(element) {
	var rect = element.getBoundingClientRect();
	return rect.top + getScrollTop();
}

