

export class Navigation {
	constructor(container, clickPrev, clickNext) {
		this._container = container;
		this.clickPrev = clickPrev;
		this.clickNext = clickNext;
		this._draw();
	}

	_draw() {
		var nav = document.createElement("div");
		nav.className = "ig-nav-container";
		nav.innerHTML = 
			'<div class="ig-nav">'+
				'<div class="ig-nav-btn-group">'+
					'<div class="ig-nav-btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>'+
					// '<div class="ig-nav-btn"><i class="fa fa-stop-circle" aria-hidden="true"></i></div>'+
					'<div class="ig-nav-btn"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>'+
				'</div>'+
			'</div>';
		var btnPrev = nav.querySelectorAll(".ig-nav-btn")[0];
		btnPrev.onclick = this.clickPrev;
		btnPrev.ontouchstart = this.clickPrev;

		var btnNext = nav.querySelectorAll(".ig-nav-btn")[1];
		btnNext.onclick = this.clickNext;
		btnNext.ontouchstart = this.clickNext;
		this._container.appendChild(nav);
		this._tag = nav;
	}
}


			