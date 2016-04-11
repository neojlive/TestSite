# TestSite

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style>
@media only screen and (max-width: 768px)
.rapid-payment {
    position: absolute;
    top: 383px;
    height: 97px;
    width: 94.5%;
    margin-left: 6px;
}

@media only screen and (max-width: 992px)
.rapid-payment {
    height: 50px;
    width: 731px;
    margin-left: 13px;
}
.rapid-payment {
    float: left;
    background: #fff;
    width: 220px;
    height: 212px;
    margin-top: 17px;
    color: #0b4668;
}

.input-group-addon, .input-group-btn {
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;
}
.input-group-addon {
    padding: 3px 12px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
	
@media only screen and (max-width: 768px)
.phone-sum-wrap {
    margin-left: 10px;
    width: 90px;
}
@media only screen and (max-width: 992px)
.phone-sum-wrap {
    width: 105px;
    display: inline-block;
    padding-top: 3px;
    margin-left: 25px;
}

.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:first-child>.btn-group:not(:first-child)>.btn, .input-group-btn:first-child>.btn:not(:first-child), .input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group>.btn, .input-group-btn:last-child>.dropdown-toggle {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

</style>
<script async src="/js/widget.pack.js"></script>

</head>
<body>
<div class="rapid-payment">
<form name="charger" action="https://www.ipay.ua/charger/" onsubmit="return IPayForm();" style="width: auto; margin: 0 auto;"> 
    <input type="hidden" name="act" value="pay"> 
	<input type="hidden" name="bill" value=""> 
	<h3>пополнить мобильный</h3> 
	<dt class="hidden-sm hidden-xs">
	<input type="hidden" name="lang" value="ru"> 
	<div class="img-mobile" style="height: 30px; width: 220px;"></div> 
	</dt> 
	<dl> <div class="input-group "> 
	<span class="input-group-addon"> 
	<span><i class="fa fa-mobile fa-2x"></i></span> 
	</span>
        <input type="tel" class="hidden" minlength="10" maxlength="13" name="account" value="">
        <input type="tel" name="account_insert" pattern="^([\+])??(380)??\s??\((63|73|93|67|96|97|98|39|68|50|66|91|92|94|95|99|48)\)\s??([0-9\s]){9}" maxlength="19" tabindex="7" class="form-control phone-masks tel " placeholder="+380 (00) 000 00 00" minlength="19" autocomplete="off" required="required"> 
		</div> <div class="xs"> 
		<div class="phone-sum-wrap"> 
		<span class="hidden-sm hidden-xs phone-sum">СУММА</span> 
		<input type="text" style="font-size: 110%;" min="1" max="1500" name="amount" required="1" class="sum" value="50.00"> 
		<span class="hidden-sm hidden-xs">UAH</span> 
		</div> 
		<dd> <input type="submit" onclick="return IPayForm(); $(this).show();" id="IPayForm" class="confirm-btn" value="Пополнить"> </dd> 
		</div> 
		</dl> 
		</form> 
		</div>  
</div>
</body>

</html>
