/*
Custom script
*/
jQuery( document ).ready(function() {

	var initInfoConnexion = function(){
		$('.loginBlock button').click(function(event) {
			/* Act on the event */
			$('div.loginRow p').addClass('hidden');
			$('div.hiddenForm').removeClass('hidden');
		});

		//active tooltips
		$('[data-toggle="tooltip"]').tooltip();
	}

	var initIdentification = function(){

		//init custom select
		$('select').selectric();
		//init datePicker
		//$('#datetimepicker1').datetimepicker();


		/*
		Popup
		$(window).bind('beforeunload', function(){
		  return "Vous êtes sur le point de quitter le questionnaire avant de l'avoir finalisé. Vous pourrez le reprendre en l'état en vous connectant à nouveau au service avec votre code d'accès.";
		});*/

	}

	var initDescription = function(){

		$("div.barRow div.border").addClass('animOn');

		//active tooltips
		$('[data-toggle="tooltip"]').tooltip();
		//init custom select
		$('select').selectric();
		//init dateTimePicker
		$('#datetimepicker1').datetimepicker({
			format: 'DD/MM/YYYY'
		});
		$('#datetimepicker2').datetimepicker({
			format: 'DD/MM/YYYY'
		});
		$('#datetimepicker3').datetimepicker({
			format: 'DD/MM/YYYY',
			useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker4').datetimepicker({
			format: 'DD/MM/YYYY'
		});
		$('#datetimepicker5').datetimepicker({
			format: 'DD/MM/YYYY',
			useCurrent: false //Important! See issue #1075
		});
		// Link dateTimePicker bettween them
		$("#datetimepicker2").on("dp.change", function (e) {
			$('#datetimepicker3').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker3").on("dp.change", function (e) {
			$('#datetimepicker2').data("DateTimePicker").maxDate(e.date);
		});
		$("#datetimepicker4").on("dp.change", function (e) {
			$('#datetimepicker5').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker5").on("dp.change", function (e) {
			$('#datetimepicker4').data("DateTimePicker").maxDate(e.date);
		});

		/*
		Popup
		$(window).bind('beforeunload', function(){
		  return "Vous êtes sur le point de quitter le questionnaire avant de l'avoir finalisé. Vous pourrez le reprendre en l'état en vous connectant à nouveau au service avec votre code d'accès.";
		});*/

		// Get DOM of block "nouvelle absence"
		var oneBlock = $("div.rightZone div.oneBlock").html();
		// some counter
		var cpt = 1;
		var cpt1DateTimePicker = 4;
		var cpt2DateTimePicker = 5;
		var cptInput1 = 14;
		var cptInput2 = 15;
		var cptInput3 = 40;
		//When click to add new absence
		$("span.separation p").click(function(event) {

			// Increment counter
			cpt++;
			cptInput1++;
			cptInput2++;
			cptInput3++;

			// Add DOM block "nouvelle absence"
			$("span.separation").before("<div class='oneBlock'>" + oneBlock + '</div>');

			// Get last block to use later
			var lastBlock = $("div.rightZone div.oneBlock:last-of-type");

			// Alter absence text
			lastBlock.find("p").text("Absence " + cpt);

			// not the first time
			if(cpt > 2){
				/*console.log('là : '+cpt);
				console.log("new datetimepicker"+(cpt1DateTimePicker + cpt));
				console.log("new datetimepicker"+(cpt2DateTimePicker + cpt));
				console.log("-----");*/

				lastBlock.find(".first .date").attr("id", "datetimepicker"+(cpt1DateTimePicker + cpt));
				lastBlock.find(".second .date").attr("id", "datetimepicker"+(cpt2DateTimePicker + cpt));
			}else{

				// First fired
				/*console.log("#datetimepicker"+(cpt1DateTimePicker));
				console.log("#Changer en");
				console.log("datetimepicker"+(cpt1DateTimePicker + 2));
				console.log("et");
				console.log("#datetimepicker"+(cpt2DateTimePicker));
				console.log("#Changer en");
				console.log("datetimepicker"+(cpt2DateTimePicker + 2));
				console.log("-----");*/

				lastBlock.find("#datetimepicker"+(cpt1DateTimePicker)).attr("id", "datetimepicker"+(cpt1DateTimePicker + 2));
				lastBlock.find("#datetimepicker"+(cpt2DateTimePicker)).attr("id", "datetimepicker"+(cpt2DateTimePicker + 2));
			}

			// Increment counter
			cpt1DateTimePicker++;
			cpt2DateTimePicker++;

			// Alter for control ID
			if(cpt > 2){
				cptInput1 = cptInput1 + 2;
				cptInput2 = cptInput2 + 2;
				cptInput3 = cptInput3 + 2;
			}else{
				cptInput1 = cptInput1 + 1;
				cptInput2 = cptInput2 + 1;
				cptInput3 = cptInput3 + 1;
			}

			lastBlock.find("div.first label").attr("for", "input"+(cptInput1));
			lastBlock.find("div.second label").attr("for", "input"+(cptInput2));

			lastBlock.find("div.first input").attr("id", "input"+(cptInput1));
			lastBlock.find("div.second input").attr("id", "input"+(cptInput2));

			lastBlock.find("div.motifRow label").attr("for", "input"+(cptInput3));
			lastBlock.find("div.motifRow input").attr("id", "input"+(cptInput3));

			cptInput1++;
			cptInput2++;
			cptInput3++;

			// Init new dateTimePicker
			if(cpt > 2){
				/*console.log("là");
				console.log("#datetimepicker"+(cpt1DateTimePicker + cpt - 1));
				console.log("#datetimepicker"+(cpt2DateTimePicker + cpt - 1));
				console.log("---");*/

				$("#datetimepicker"+(cpt1DateTimePicker + cpt - 1)).datetimepicker({
					format: 'DD/MM/YYYY'
				});
				$("#datetimepicker"+(cpt2DateTimePicker + cpt - 1)).datetimepicker({
					format: 'DD/MM/YYYY',
					useCurrent: false //Important! See issue #1075
				});

				// Link new dateTimePicker bettween them
				$("#datetimepicker"+(cpt1DateTimePicker + cpt - 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt2DateTimePicker + cpt - 1)).data("DateTimePicker").minDate(e.date);
				});
				$("#datetimepicker"+(cpt2DateTimePicker + cpt - 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt1DateTimePicker + cpt - 1)).data("DateTimePicker").maxDate(e.date);
				});
			}
			else{
				/*console.log("#datetimepicker"+(cpt1DateTimePicker + 1));
				console.log("#datetimepicker"+(cpt2DateTimePicker + 1));
				console.log("---");*/

				// Init new dateTimePicker
				$("#datetimepicker"+(cpt1DateTimePicker + 1)).datetimepicker({
					format: 'DD/MM/YYYY'
				});
				$("#datetimepicker"+(cpt2DateTimePicker + 1)).datetimepicker({
					format: 'DD/MM/YYYY',
					useCurrent: false //Important! See issue #1075
				});

				// Link new dateTimePicker bettween them
				$("#datetimepicker"+(cpt1DateTimePicker + 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt2DateTimePicker + 1)).data("DateTimePicker").minDate(e.date);
				});
				$("#datetimepicker"+(cpt2DateTimePicker + 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt1DateTimePicker + 1)).data("DateTimePicker").maxDate(e.date);
				});
			}

			// Replace last block with the newest
			oneBlock= lastBlock.html();
		});

	}

	var initDescription2 = function(){

		$("div.barRow div.border").addClass('animOn');
		//init dateTimePicker
		$('#datetimepicker1').datetimepicker({
			format: 'DD/MM/YYYY',
			useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker2').datetimepicker({
			format: 'DD/MM/YYYY',
			useCurrent: false //Important! See issue #1075
		});
		// Link dateTimePicker bettween them
		$("#datetimepicker1").on("dp.change", function (e) {
			$('#datetimepicker2').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker2").on("dp.change", function (e) {
			$('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
		});
		/*
		Popup
		$(window).bind('beforeunload', function(){
		  return "Vous êtes sur le point de quitter le questionnaire avant de l'avoir finalisé. Vous pourrez le reprendre en l'état en vous connectant à nouveau au service avec votre code d'accès.";
		});*/

		// Get DOM of block "nouvelle absence"
		var oneBlock = $("div.leftZone div.oneBlock").html();
		// some counter
		var cpt = 1;
		var cpt1DateTimePicker = 1;
		var cpt2DateTimePicker = 2;
		var cptInput1 = 2;
		var cptInput2 = 3;
		var cptInput3 = 4;
		//When click to add new absence
		$("span.separation p").click(function(event) {

			// Increment counter
			cpt++;
			cptInput1++;
			cptInput2++;
			cptInput3++;

			// Add DOM block "nouvelle absence"
			$("span.separation").before("<div class='oneBlock'>" + oneBlock + '</div>');


			// Get last block to use later
			var lastBlock = $("div.leftZone div.oneBlock").last();

			// Alter absence text
			lastBlock.find(".requiered").text("Poste " + cpt);

			// not the first time
			if(cpt > 2){
				/*console.log('là : '+cpt);
				console.log("new datetimepicker"+(cpt1DateTimePicker + cpt));
				console.log("new datetimepicker"+(cpt2DateTimePicker + cpt));
				console.log("-----");*/

				lastBlock.find(".first .date").attr("id", "datetimepicker"+(cpt1DateTimePicker + cpt));
				lastBlock.find(".second .date").attr("id", "datetimepicker"+(cpt2DateTimePicker + cpt));
			}else{

				// First fired
				/*console.log("#datetimepicker"+(cpt1DateTimePicker));
				console.log("#Changer en");
				console.log("datetimepicker"+(cpt1DateTimePicker + 2));
				console.log("et");
				console.log("#datetimepicker"+(cpt2DateTimePicker));
				console.log("#Changer en");
				console.log("datetimepicker"+(cpt2DateTimePicker + 2));
				console.log("-----");*/

				lastBlock.find("#datetimepicker"+(cpt1DateTimePicker)).attr("id", "datetimepicker"+(cpt1DateTimePicker + 2));
				lastBlock.find("#datetimepicker"+(cpt2DateTimePicker)).attr("id", "datetimepicker"+(cpt2DateTimePicker + 2));
			}

			// Increment counter
			cpt1DateTimePicker++;
			cpt2DateTimePicker++;

			// Alter for control ID
			if(cpt > 2){
				cptInput1 = cptInput1 + 2;
				cptInput2 = cptInput2 + 2;
				cptInput3 = cptInput3 + 2;
			}else{
				cptInput1 = cptInput1 + 1;
				cptInput2 = cptInput2 + 1;
				cptInput3 = cptInput3 + 1;
			}

			lastBlock.find("div.first label").attr("for", "input"+(cptInput1));
			lastBlock.find("div.second label").attr("for", "input"+(cptInput2));

			lastBlock.find("div.first input").attr("id", "input"+(cptInput1));
			lastBlock.find("div.second input").attr("id", "input"+(cptInput2));

			lastBlock.find("div.motifRow label").attr("for", "input"+(cptInput3));
			lastBlock.find("div.motifRow input").attr("id", "input"+(cptInput3));

			cptInput1++;
			cptInput2++;
			cptInput3++;

			// Init new dateTimePicker
			if(cpt > 2){
				/*console.log("là");
				console.log("#datetimepicker"+(cpt1DateTimePicker + cpt - 1));
				console.log("#datetimepicker"+(cpt2DateTimePicker + cpt - 1));
				console.log("---");*/

				$("#datetimepicker"+(cpt1DateTimePicker + cpt - 1)).datetimepicker({
					format: 'DD/MM/YYYY'
				});
				$("#datetimepicker"+(cpt2DateTimePicker + cpt - 1)).datetimepicker({
					format: 'DD/MM/YYYY',
					useCurrent: false //Important! See issue #1075
				});

				// Link new dateTimePicker bettween them
				$("#datetimepicker"+(cpt1DateTimePicker + cpt - 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt2DateTimePicker + cpt - 1)).data("DateTimePicker").minDate(e.date);
				});
				$("#datetimepicker"+(cpt2DateTimePicker + cpt - 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt1DateTimePicker + cpt - 1)).data("DateTimePicker").maxDate(e.date);
				});
			}
			else{
				/*console.log("#datetimepicker"+(cpt1DateTimePicker + 1));
				console.log("#datetimepicker"+(cpt2DateTimePicker + 1));
				console.log("---");*/

				// Init new dateTimePicker
				$("#datetimepicker"+(cpt1DateTimePicker + 1)).datetimepicker({
					format: 'DD/MM/YYYY'
				});
				$("#datetimepicker"+(cpt2DateTimePicker + 1)).datetimepicker({
					format: 'DD/MM/YYYY',
					useCurrent: false //Important! See issue #1075
				});

				// Link new dateTimePicker bettween them
				$("#datetimepicker"+(cpt1DateTimePicker + 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt2DateTimePicker + 1)).data("DateTimePicker").minDate(e.date);
				});
				$("#datetimepicker"+(cpt2DateTimePicker + 1)).on("dp.change", function (e) {
					$('#datetimepicker'+(cpt1DateTimePicker + 1)).data("DateTimePicker").maxDate(e.date);
				});
			}

			// Replace last block with the newest
			oneBlock= lastBlock.html();
		});

		// OnClick boule button
		$("div.oneRadioCustom").click(function(event) {
			/* Act on the event */
			$(this).parent(".rowCustomRadio").find('.active').removeClass('active');
			$(this).addClass('active');
		});

	}

	var initQuestionnaire = function(){

		$("div.oneEmploye").click(function(event) {
			/* Act on the event */
			if( !$(this).hasClass('active') ) {

				// toggle employe focus
				$("div.oneEmploye.active").removeClass('active');
				$(this).addClass('active');

				// toggle folder focus
				var personFocused = $(this).attr("class").split(" ")[1];
				$("div.oneQuestionnaireEnAttente").addClass('hidden');
				$("."+personFocused).removeClass('hidden');

			}
		});

		$("div.oneQuestionnaireEnAttente").click(function(event) {
			/* Act on the event */
			if( !$(this).hasClass('active') ) {

				// toggle employe focus
				$("div.oneQuestionnaireEnAttente.active").removeClass('active');
				$(this).addClass('active');

			}
		});
	}

	var initPathologie = function(){

		$("div.barRow div.border").addClass('animOn');

		$('form').submit(function(event){
			event.preventDefault();
		});

		$('button.one').click(function(){
			$('input.one').trigger('click');
		});
		$('input.one').change(function(){
			$('p.specialhelp.one').text( $(this).val() );
			$('.second.hidden').removeClass('hidden');
		});

		$('button.two').click(function(){
			$('input.two').trigger('click');
		});
		$('input.two').change(function(){
			$('p.specialhelp.two').text( $(this).val() );
		});

		$('button.three').click(function(){
			$('input.three').trigger('click');
		});
		$('input.three').change(function(){
			$('p.specialhelp.three').text( $(this).val() );
			$('.second.hidden').removeClass('hidden');
		});

		$('button.four').click(function(){
			$('input.four').trigger('click');
		});
		$('input.four').change(function(){
			$('p.specialhelp.four').text( $(this).val() );
		});

		// OnClick boule button
		$("div.oneRadioCustom").click(function(event) {
			/* Act on the event */
			$(this).parent(".rowCustomRadio").find('.active').removeClass('active');
			$(this).addClass('active');
		});

		// OnClick minimized button
		$("h4").click(function(event) {
			/* Act on the event */
			console.log($(this).parent().html());
			if( $(this).parent().hasClass('minimized') ) $(this).parent().removeClass('minimized');
			else $(this).parent().addClass('minimized');
		});
	}

	var initRecap = function(){

		$("div.barRow div.border").addClass('animOn');

		// toggle text disabled / enable input value
		$("div.specialEdit.off div.fakeInput").click(function(event) {
			/* Act on the event */
			$(this).hide().prev("input[disabled]").prop("disabled", false).focus();
			$(this).parents("div.specialEdit").removeClass('off');
			$(this).parents("div.specialEdit").addClass('on');

			if($(this).hasClass('toEditPeriode')){
				$(this).parents("div.specialEdit").addClass('hidden').next().removeClass('hidden');
			}

			if($(this).hasClass('toEditSelect')){
				$(this).parents("div.specialEdit").addClass('hidden').next().removeClass('hidden');

				if($(this).hasClass('nan')) var olderValue = $(this).prev().val();
				else var olderValue = $(this).prev().val().split(" ")[0];

				$(this).parents(".specialEdit").next().find("select").val( olderValue );
			}

			$("div.editSelect span.btnOkEditSelect").click(function(event) {
				var currentSelectBlock = $(this).parents(".editSelect");
				var prevInputTextForSelect = currentSelectBlock.prev();
				var valueSelect = currentSelectBlock.find("select").val();
				var unite = $(this).attr("data-label");

				prevInputTextForSelect.find("input").val(valueSelect+" "+unite).css("backgroundColor","#fff").prop("disabled", true).next().show();
				prevInputTextForSelect.removeClass('on').addClass('off');

				currentSelectBlock.addClass('hidden')
				prevInputTextForSelect.removeClass('hidden');

			});

			$("div.periode span.btnOkEditPeriode").click(function(event) {
				/* Act on the event */
				var currentPeriodeBlock = $(this).parents(".periode");
				var prevInputTextForDate = $(this).parents(".periode").prev();

				var firstValueDate = currentPeriodeBlock.find("div.first input").val();
				var secondValueDate = currentPeriodeBlock.find("div.second input").val();

				prevInputTextForDate.find("input").val("Du "+firstValueDate+" au "+secondValueDate).css("backgroundColor","#fff").prop("disabled", true).next().show();

				prevInputTextForDate.removeClass('on').addClass('off');

				currentPeriodeBlock.addClass('hidden')
				prevInputTextForDate.removeClass('hidden');
			});

			$("span.btnOkEditDate").click(function(event) {
				/* Act on the event */
				var currentDateBlock = $(this).parents(".dateFormGroup");
				var prevInputTextForDate = $(this).parents(".dateFormGroup").prev();

				var valueDate = currentDateBlock.find("input").val();

				prevInputTextForDate.find("input").val(valueDate).css("backgroundColor","#fff").prop("disabled", true).next().show();

				prevInputTextForDate.removeClass('on').addClass('off');

				currentDateBlock.addClass('hidden')
				prevInputTextForDate.removeClass('hidden');
			});

			$("div.specialEdit.on span.btnOkEdit").click(function(event) {
				/* Act on the event */
				$(this).next().next().show();
				$(this).next("input").prop("disabled", true).css("backgroundColor","#fff").focus();
				$(this).parents("div.specialEdit").removeClass('on');
				$(this).parents("div.specialEdit").addClass('off');
			});
		});


		$("div.specialEdit.off div.fakeInput").hover(function(event) {
			/* Act on the event */
			$(this).prev("input[disabled]").css("backgroundColor", "#F1F1F1");
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$(this).prev("input[disabled]").css("backgroundColor", "#fff");
		});

		// File upload edition
		$("p.fichierJointLabel").click(function(event) {
			/* Act on the event */
			if($(this).hasClass('off')){

				$(this).addClass('on').removeClass('off');
				$("a.upload").addClass('editOn');
				$("p.specialhelp").show();

				$("a.upload.editOn").one("click",function(event) {
					/* Act on the event */
					event.preventDefault();

					$(this).prev().trigger('click');
					$(this).prev().change(function(){
						$(this).next().text( $(this).val() );
						$(this).next().next().text( $(this).val() );
					});

				});

			}else{

				/* Act on the event */
				$(this).removeClass('on').addClass('off');
				$("a.upload").removeClass('editOn');
				$("p.specialhelp").hide();

			}

		});

		$(".emptyInputFile").click(function(event) {
			/* Act on the event */
			event.preventDefault();

			$(this).prev().trigger('click');
			$(this).prev().change(function(){
				$(this).next().text( $(this).val() );
				$(this).next().next().text( $(this).val() );
			});
		});

		/**/

		//init dateTimePicker
		$('#datetimepicker1').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2007-07-14",
			//useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker2').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-12-20",
			useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker3').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-12-23",
			//useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker4').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-12-20",
			//useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker5').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-04-07",
			//useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker6').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-04-17",
			useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker7').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-10-10",
			//useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker8').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-10-25",
			useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker9').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-04-07",
			//useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker10').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-04-17",
			useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker11').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-10-10",
			//useCurrent: false //Important! See issue #1075
		});
		$('#datetimepicker12').datetimepicker({
			format: 'DD/MM/YYYY',
			defaultDate: "2016-10-25",
			useCurrent: false //Important! See issue #1075
		});
		// Link dateTimePicker bettween them
		$("#datetimepicker1").on("dp.change", function (e) {
			$('#datetimepicker2').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker2").on("dp.change", function (e) {
			$('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
		});

		$("#datetimepicker5").on("dp.change", function (e) {
			$('#datetimepicker6').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker6").on("dp.change", function (e) {
			$('#datetimepicker5').data("DateTimePicker").maxDate(e.date);
		});

		$("#datetimepicker7").on("dp.change", function (e) {
			$('#datetimepicker8').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker8").on("dp.change", function (e) {
			$('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
		});

		$("#datetimepicker9").on("dp.change", function (e) {
			$('#datetimepicker10').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker10").on("dp.change", function (e) {
			$('#datetimepicker9').data("DateTimePicker").maxDate(e.date);
		});

		$("#datetimepicker11").on("dp.change", function (e) {
			$('#datetimepicker12').data("DateTimePicker").minDate(e.date);
		});
		$("#datetimepicker12").on("dp.change", function (e) {
			$('#datetimepicker11').data("DateTimePicker").maxDate(e.date);
		});

		// toggle date/periode disabled / enable input value


	}

	var initMention = function(){
		var oldURL = document.referrer;
		$("a.prevAmeli").attr("href",oldURL);
	}

	var initAide = function(){

		$(".BandeauAide").click(function(event) {
			/* Act on the event */
			if( $(this).hasClass('open') ) {

				$(this).find('p').text("Besoin d'aide ?");
				$(this).removeClass('open');
			}
			else{

				$(this).find('p').text("Pour toute question, veuillez contactez le 3606");
				$(this).addClass('open');
			}


		});
	}

	var initAccueil = function(){
		var getUrlParameter = function getUrlParameter(sParam) {
		    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		        sURLVariables = sPageURL.split('&'),
		        sParameterName,
		        i;

		    for (i = 0; i < sURLVariables.length; i++) {
		        sParameterName = sURLVariables[i].split('=');

		        if (sParameterName[0] === sParam) {
		            return sParameterName[1] === undefined ? true : sParameterName[1];
		        }
		    }
		};

		var isOther = getUrlParameter('back');
		if(isOther == 1) {
			$(".required").removeClass('required');
		}
	}

	var initQuestionnaire1 = function(){
		//init dateTimePicker
		$('#datetimepicker1').datetimepicker({
			format: 'DD/MM/YYYY'
		});
	}

	var initQuestionnaire2 = function(){
		var cpt =0;

		$(".separation").click(function(event) {
			/* Act on the event */
			cpt++;

			var htmlRaisonSocial = '<div class="form-group mrgtop padBot">'+
	                            		'<label for="input'+(cpt+3)+'" class="col-sm-4 control-label readOnly spec">Raison social de l’employeur '+(cpt+1)+' :</label>'+
	                            		'<div class="col-sm-8">'+
	                              		'<input type="text" class="form-control" id="input'+(cpt+3)+'" placeholder="">'+
	                            		'</div>'+
	                        		'</div>';

			$(this).before(htmlRaisonSocial);

		});
	}

	var initListeDossier =function(){

		var table = $('table.table').DataTable({
			/*paginate: false,*/
			/*searching: false,*/
			/*info: false*/
	    	//ordering:  false
	    	"pagingType": "simple"
		});

		//table.fnPageChange( 'sdfsf' );

		$('table thead th').hover(function(e){
			$(this).find('.iconFilterDown').css('border-color','#005ea8 transparent transparent transparent');

		}, function(){
			$(this).find('.iconFilterDown').css('border-color','#ffffff transparent transparent transparent');
		});

		var cpt = 1;
		$(".pagerNext").click(function(event) {
			/* Act on the event */
			cpt++;
			if(cpt <= 2){
				$(".paginate_button.next > a").trigger('click');
				$(".pager span.txt").text(cpt+' sur 2');
			}

			if(cpt > 1) $(".pagerPrev").removeClass('hidden');
			if(cpt > 1) $(".pagerNext").addClass('hidden');

		});

		$(".pagerPrev").click(function(event) {
			/* Act on the event */
			if(cpt > 1){
				cpt--;
				$(".paginate_button.previous > a").trigger('click');
				$(".pager span.txt").text(cpt+' sur 2');
			}

			if(cpt == 1) $(".pagerPrev").addClass('hidden');
			if(cpt >= 1) $(".pagerNext").removeClass('hidden');



		});


	    /* search in one column : https://datatables.net/examples/api/multi_filter.html
	    $('.table.table th.statutTh').each( function () {
	        var title = $(this).text();
	        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
	    } );

	    // DataTable
	    var table = $('#example').DataTable();

	    // Apply the search
	    table.columns().every( function () {
	        var that = this;

	        $( 'input', this.footer() ).on( 'keyup change', function () {
	            if ( that.search() !== this.value ) {
	                that
	                    .search( this.value )
	                    .draw();
	            }
	        } );
	    } );*/
		/*
		var filtreTab = function(itemToFiltre){
			console.log(itemToFiltre.attr('class'));

			table.order([0, 'desc']).draw();
			table.search( 'Roder' ).draw();
		}*/

		//Toggle show input to filter tab
		$('span.iconSearch').click(function(event) {

			if( $(this).hasClass('active') ) $(this).removeClass('active').next().addClass('hidden');
			else $(this).addClass('active').next().removeClass('hidden');

		});

		/*$('table td').click(function(e){
			var url = 'detailDossier-agent.html';
			window.open(url,'_self');
		});*/

		$('th').click(function(e){
			myTriangle = $(this).find('span.iconFilterDown');
			//filtreTab(myTriangle.parent());

			if(myTriangle.hasClass('active')){

				myTriangle.css('transform', 'rotate(0deg)');
				myTriangle.removeClass('active');

			}else{

				myTriangle.css('transform', 'rotate(180deg)');
				myTriangle.addClass('active');
			}
		});

	}

	var initDetailDossier = function(){
		//init modal
		$('#myModal').on('shown.bs.modal', function () {
		  $('#myInput').focus()
		});

		$('#myModalDownload').on('shown.bs.modal', function () {
		  $('#myInput').focus()
		});

		$('#myModalDownload input').change(function(e){

			if($(this).is(':checked')) $(this).parents(".checkbox").addClass('checked');
			else $(this).parents(".checkbox").removeClass('checked');

		});

		// Toggle click show / hide h4
		$("h4 .iconD").click(function(event) {



			var elem = $(this).parent('.mrgT').next();
			if(elem.hasClass('hidden')) {
				elem.removeClass('hidden');
				$(this).addClass('active');
			}
			else {
				elem.addClass('hidden');
				$(this).removeClass('active');
			}

		});

		// Toggle click show / hide h5
		/*$("h5 .iconD").click(function(event) {

			var elem = $(this).parent('h5').next();
			if(elem.hasClass('hidden')) elem.removeClass('hidden');
			else elem.addClass('hidden');

			var elemLink = $("div.rightZone div.identBlock1");
			if(elemLink.hasClass('hidden')) elemLink.removeClass('hidden');
			else elemLink.addClass('hidden');

		});*/

		$("div.one div.leftZone .iconD").click(function(event) {
			var elem = $(this).parent('h5').next();
			var elemLink = elem.attr('class').split(' ')[0];

			if(elem.hasClass('hidden')) {
				elem.removeClass('hidden');
				$(this).addClass('active');
				$("div.one div.rightZone ."+elemLink).removeClass('hidden');
				$("div.one div.rightZone ."+elemLink).prev().find('.iconD').addClass('active');

			}
			else{
				elem.addClass('hidden');
				$(this).removeClass('active');
				$("div.one div.rightZone ."+elemLink).prev().find('.iconD').removeClass('active');
				$("div.one div.rightZone ."+elemLink).addClass('hidden');
			}
		});

		$("div.one div.rightZone .iconD").click(function(event) {
			var elem = $(this).parent('h5').next();
			var elemLink = elem.attr('class').split(' ')[0];

			if(elem.hasClass('hidden')) {
				elem.removeClass('hidden');
				$(this).addClass('active');
				$("div.one div.leftZone ."+elemLink).removeClass('hidden');
				$("div.one div.leftZone ."+elemLink).prev().find('.iconD').addClass('active');

			}
			else{
				elem.addClass('hidden');
				$(this).removeClass('active');
				$("div.one div.leftZone ."+elemLink).prev().find('.iconD').removeClass('active');
				$("div.one div.leftZone ."+elemLink).addClass('hidden');
			}
		});

		$("div.two div.leftZone .iconD").click(function(event) {
			var elem = $(this).parent('h5').next();
			var elemLink = elem.attr('class').split(' ')[0];

			if(elem.hasClass('hidden')) {
				elem.removeClass('hidden');
				$(this).addClass('active');
				$("div.two div.rightZone ."+elemLink).removeClass('hidden');
				$("div.two div.rightZone ."+elemLink).prev().find('.iconD').addClass('active');
			}
			else{
				elem.addClass('hidden');
				$(this).removeClass('active');
				$("div.two div.rightZone ."+elemLink).prev().find('.iconD').removeClass('active');
				$("div.two div.rightZone ."+elemLink).addClass('hidden');
			}
		});

		$("div.two div.rightZone .iconD").click(function(event) {
			var elem = $(this).parent('h5').next();
			var elemLink = elem.attr('class').split(' ')[0];

			if(elem.hasClass('hidden')) {
				elem.removeClass('hidden');
				$(this).addClass('active');
				$("div.two div.leftZone ."+elemLink).removeClass('hidden');
				$("div.two div.leftZone ."+elemLink).prev().find('.iconD').addClass('active');
			}
			else{
				elem.addClass('hidden');
				$(this).removeClass('active');
				$("div.two div.leftZone ."+elemLink).prev().find('.iconD').removeClass('active');
				$("div.two div.leftZone ."+elemLink).addClass('hidden');
			}
		});

		/*$("div.leftZone h5 .iconD").click(function(event) {

			var elem = $(this).parent('h5').next();
			if(elem.hasClass('hidden')) elem.removeClass('hidden');
			else elem.addClass('hidden');

			//var elemLink = $("div.rightZone h5 .iconD")
		});*/

	}

	window.init = function() {

		if( $('.container-fluid.main').hasClass('accueil') ) initAccueil();
		if( $('.container-fluid.main').hasClass('connexion') ) initInfoConnexion();
		if( $('.container-fluid.main').hasClass('identification') ) initIdentification();
		if( $('.container-fluid.main').hasClass('description') ) initDescription();
		if( $('.container-fluid.main').hasClass('description2') ) initDescription2();
		if( $('.container-fluid.main').hasClass('questionnaire') ) initQuestionnaire();
		if( $('.container-fluid.main').hasClass('pathologie') ) initPathologie();
		if( $('.container-fluid.main').hasClass('recap') ) initRecap();
		if( $('.container-fluid.main').hasClass('mention') ) initMention();
		if( $('.container-fluid.main').hasClass('questionnaire1') ) initQuestionnaire1();
		if( $('.container-fluid.main').hasClass('questionnaire2') ) initQuestionnaire2();
		if( $('.container-fluid.main').hasClass('liste-dossier') ) initListeDossier();
		if( $('.container-fluid.main').hasClass('detail-dossier') ) initDetailDossier();
		if( $('.container-fluid').hasClass('main') ) initAide();



	}

	init(); // true
});