import { numberConverter } from './romanNumeralRebuild';
import { isGreaterThanFourThousand } from './romanNumeralRebuild';
import { isNumber } from './romanNumeralRebuild';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#numberInput").val());
    isNumber(number);
    isGreaterThanFourThousand(number);
    var output = numberConverter(number);
    $('h3').text(output);
    $("div.result").show();
  });
});
