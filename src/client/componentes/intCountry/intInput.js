const riot = require('riot')
const all = require('../../theme/cleave-phone.bo')


riot.tag2('intltelinput', '<div class="ahorasi"> <select id="selected"> <option value="+591">BO</option> <option value="+11">US</option> </select> <input class="mdl-textfield__input" placeholder="Deja tu telefono de whatsapp" id="number"> </div> <input class="mdl-textfield__input" placeholder="Deja tu telefono de whatsapp" id="number"> <button type="button" name="button" onclick="{verValor}"> ver valor</button>', 'intltelinput .has-float-label,[data-is="intltelinput"] .has-float-label{ display: block; position: relative; } intltelinput .has-float-label label,[data-is="intltelinput"] .has-float-label label,intltelinput .has-float-label > span,[data-is="intltelinput"] .has-float-label > span{ position: absolute; left: 0; top: 0; cursor: text; font-size: 75%; opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select{ -webkit-appearance: none; -moz-appearance: none; appearance: none; } intltelinput .has-float-label textarea,[data-is="intltelinput"] .has-float-label textarea{ width: 100%; } intltelinput .has-float-label input,[data-is="intltelinput"] .has-float-label input,intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select,intltelinput .has-float-label textarea,[data-is="intltelinput"] .has-float-label textarea{ font-size: inherit; padding-top: 1em; margin-bottom: 2px; border: 0; border-radius: 0; border-bottom: 2px solid rgba(0, 0, 0, 0.1); } intltelinput .has-float-label input::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label input::-webkit-input-placeholder,intltelinput .has-float-label select::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label select::-webkit-input-placeholder,intltelinput .has-float-label textarea::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label textarea::-webkit-input-placeholder{ opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label input::-moz-placeholder,[data-is="intltelinput"] .has-float-label input::-moz-placeholder,intltelinput .has-float-label select::-moz-placeholder,[data-is="intltelinput"] .has-float-label select::-moz-placeholder,intltelinput .has-float-label textarea::-moz-placeholder,[data-is="intltelinput"] .has-float-label textarea::-moz-placeholder{ opacity: 1; transition: all .2s; } intltelinput .has-float-label input:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label input:-ms-input-placeholder,intltelinput .has-float-label select:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label select:-ms-input-placeholder,intltelinput .has-float-label textarea:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:-ms-input-placeholder{ opacity: 1; transition: all .2s; } intltelinput .has-float-label input::placeholder,[data-is="intltelinput"] .has-float-label input::placeholder,intltelinput .has-float-label select::placeholder,[data-is="intltelinput"] .has-float-label select::placeholder,intltelinput .has-float-label textarea::placeholder,[data-is="intltelinput"] .has-float-label textarea::placeholder{ opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::-webkit-input-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::-webkit-input-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::-webkit-input-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::-moz-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::-moz-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::-moz-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus):-ms-input-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus):-ms-input-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus):-ms-input-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus) + *,intltelinput .has-float-label select:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus) + *,intltelinput .has-float-label textarea:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus) + *{ font-size: 155%; opacity: .92; top: 1.25em; } intltelinput .has-float-label input:focus,[data-is="intltelinput"] .has-float-label input:focus,intltelinput .has-float-label select:focus,[data-is="intltelinput"] .has-float-label select:focus,intltelinput .has-float-label textarea:focus,[data-is="intltelinput"] .has-float-label textarea:focus{ outline: none; border-color: rgba(0, 0, 0, 0.5); } intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select{ padding-right: 1em; background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E") no-repeat right 0.5em bottom 0.25em; background-size: 8px 10px; } intltelinput input[type=text],[data-is="intltelinput"] input[type=text],intltelinput textarea,[data-is="intltelinput"] textarea{ -webkit-transition: all 0.30s ease-in-out; -moz-transition: all 0.30s ease-in-out; -ms-transition: all 0.30s ease-in-out; -o-transition: all 0.30s ease-in-out; outline: none; padding: 3px 0px 3px 3px; margin: 5px 1px 3px 0px; border: 1px solid #DDDDDD; } intltelinput input[type=text]:focus,[data-is="intltelinput"] input[type=text]:focus,intltelinput textarea:focus,[data-is="intltelinput"] textarea:focus{ box-shadow: 0 0 5px rgba(81, 203, 238, 1); padding: 3px 0px 3px 3px; margin: 5px 1px 3px 0px; border: 1px solid rgba(81, 203, 238, 1); } intltelinput .ahorasi,[data-is="intltelinput"] .ahorasi{ display: flex; flex-direction: row; width:50%; margin: 0 auto; } intltelinput select,[data-is="intltelinput"] select{ flex: 0 6 auto; order: 1; } intltelinput #number,[data-is="intltelinput"] #number{ flex: 0 1 auto; order: 2; }', '', function(opts) {
this.on('mount',()=>{

  console.log('ready');

  let elem = document.getElementById('number')
  const cleave = new Cleave(elem, {
    blocks: [3, 2, 3],
    delimiters: ['-', '-', '-'],
    phone: true,
    phoneRegionCode: 'BO'
  })

  cleave.getRawValue()

})

this.verValor = () => {
  let elem = document.getElementById('number')
  let othe = document.getElementById('selected')
  console.log(othe.value + elem.value)
}

});