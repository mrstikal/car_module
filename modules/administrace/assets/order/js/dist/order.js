!function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const t={_storage:new WeakMap,put:function(e,t,r){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,r)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var r=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),r}},r=function(e,t,r,n){let c;c="object"==typeof e?[document]:Array.from(document.querySelectorAll(e));let a=t.split(" ");if("function"==typeof r){let e=r;c.forEach((function(t){a.forEach((function(r){t.addEventListener(r,(function(r){e(t,r)}))}))}))}else c.forEach((function(e){a.forEach((function(t){e.addEventListener(t,(function(e){e.target.matches(r)&&n(e.target,e)}))}))}))},n=function(e,t="block"){Array.from(document.querySelectorAll(e)).forEach((function(e){e.style.display=t}))},c=function(e){Array.from(document.querySelectorAll(e)).forEach((function(e){e.style.display="none"}))},a=function(e,t){let r;"object"==typeof e?e instanceof Element?r=[e]:e instanceof NodeList&&(r=Array.from(e)):r=Array.from(document.querySelectorAll(e)),r.forEach((function(e){e.classList.add(t)}))},o=function(e,t){let r;"object"==typeof e?e instanceof Element?r=[e]:e instanceof NodeList&&(r=Array.from(e)):r=Array.from(document.querySelectorAll(e)),r.forEach((function(e){e.classList.remove(t)}))};class i{constructor(){e(this,"mandatories",[]),e(this,"optionals",[]),e(this,"throwErrors",!0)}process(){let e=!1,r="",n=[],c=this.mandatories,a=this.optionals,o=this.throwErrors;if(c.length&&(n=Array.from(document.querySelectorAll(c)),n.forEach((function(t,n){if(t){let n=t.value;null==n&&(n=""),""==n.trim()&&(t.closest(".js_parent").querySelector(".this_element_name").classList.add("red_error"),t.classList.add("red_error"),e=!0,r+='<p>Je třeba vyplnit "'+t.closest(".js_parent").querySelector(".this_element_name").textContent+'"</p>')}})),e)){if(o){let e=document.querySelector(".general_error");e.querySelector(".error_is").innerHTML=r,e.style.display="block",TweenMax.to([document.documentElement,document.body],1,{scrollTop:l(document.querySelector(".red_error")).top})}return!1}a.length&&(n=n.concat(Array.from(document.querySelectorAll(a))));let i=new FormData;return n.forEach((function(e,r){if(e){let r=e.id,n=0;if(t.has(e,"Datepick")){let r=new Date(t.get(e,"Datepick").getDate("mm/dd/yyyy"));e.classList.contains("from")?(r.setHours(0,0,0,0),n=Math.ceil(r.getTime()/1e3)):e.classList.contains("to")?(r.setHours(23,59,59,999),n=Math.floor(r.getTime()/1e3)):(r.setHours(0,0,0,0),n=Math.ceil(r.getTime()/1e3))}else n=e.matches('[type="checkbox"]')?Number(e.checked):e.value.trim();i.append(r,n)}})),i}}const l=function(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset-document.documentElement.clientTop,left:t.left+window.pageXOffset-document.documentElement.clientLeft}};Date;class u{constructor(e){return this.formData=new FormData,this.createFormData=function(e,t=""){for(let r in e){let n=e[r],c=t?t+"["+r+"]":r;"string"==typeof n||"number"==typeof n?this.formData.append(c,n):"object"==typeof n&&this.createFormData(n,c)}},this.createFormData(e),this.formData}}let _;function s(e){let r=e.querySelector(".payment_method").value,n=e.querySelector(".issue_date"),c=e.querySelector(".due_at"),a=0;a=new Date(t.get(n,"Datepick").getDate("mm/dd/yyyy")),a.setHours(0,0,0,0),"transfer"==r&&a.setDate(a.getDate()+7),t.get(c,"Datepick").setDate(a)}function d(){if(document.querySelector("#create_bail_cash_register").checked||document.querySelector("#create_cash_register").checked||(document.querySelector("#cash_register_rent_actual_prefix").value="",document.querySelector("#cash_register_rent_actual_number").value="",document.querySelector("#cash_register_bail_actual_prefix").value="",document.querySelector("#cash_register_bail_actual_number").value="",a(".generate_rent_cash_register_novat","inactive"),a(".generate_bail_cash_register_novat","inactive")),document.querySelector("#create_bail_cash_register").checked&&!document.querySelector("#create_cash_register").checked){document.querySelector("#cash_register_rent_actual_prefix").value="",document.querySelector("#cash_register_rent_actual_number").value="";let e=0;e=parseInt(cashRegisterInits.next_number),e=String(e).padStart(5,"0"),document.querySelector("#cash_register_bail_actual_number").value=e,document.querySelector("#cash_register_bail_actual_prefix").value=cashRegisterInits.prefix,a(".generate_rent_cash_register_novat","inactive"),o(".generate_bail_cash_register_novat","inactive")}if(!document.querySelector("#create_bail_cash_register").checked&&document.querySelector("#create_cash_register").checked){let e=0;e=parseInt(cashRegisterInits.next_number)+1,e=String(e).padStart(5,"0"),document.querySelector("#cash_register_rent_actual_number").value=e,e=cashRegisterInits.prefix+e,document.querySelector("#cash_register_rent_actual_prefix").value=cashRegisterInits.prefix,o(".generate_rent_cash_register_novat","inactive"),a(".generate_bail_cash_register_novat","inactive")}if(document.querySelector("#create_bail_cash_register").checked&&document.querySelector("#create_cash_register").checked){let e=0;e=parseInt(cashRegisterInits.next_number)+1,e=String(e).padStart(5,"0"),document.querySelector("#cash_register_bail_actual_number").value=e,document.querySelector("#cash_register_bail_actual_prefix").value=cashRegisterInits.prefix,e=parseInt(cashRegisterInits.next_number)+1,e=String(e).padStart(5,"0"),document.querySelector("#cash_register_rent_actual_number").value=e,e=cashRegisterInits.prefix+e,document.querySelector("#cash_register_rent_actual_prefix").value=cashRegisterInits.prefix,o(".generate_rent_cash_register_novat","inactive"),o(".generate_bail_cash_register_novat","inactive")}}function m(){if(document.querySelector("#create_bail_invoice").checked||document.querySelector("#create_invoice").checked||(document.querySelector("#invoice_bail_actual_prefix").value="",document.querySelector("#invoice_bail_actual_number").value="",document.querySelector("#invoice_rent_actual_prefix").value="",document.querySelector("#invoice_rent_actual_number").value="",a(".generate_rent_invoice_novat","inactive"),a(".generate_bail_invoice_novat","inactive")),document.querySelector("#create_bail_invoice").checked&&!document.querySelector("#create_invoice").checked){document.querySelector("#invoice_rent_actual_prefix").value="",document.querySelector("#invoice_rent_actual_number").value="";let e=0;e=parseInt(invoiceInits.next_number)+1,e=String(e).padStart(5,"0"),document.querySelector("#invoice_bail_actual_number").value=e,document.querySelector("#invoice_bail_actual_prefix").value=invoiceInits.prefix,a(".generate_rent_invoice_novat","inactive"),o(".generate_bail_invoice_novat","inactive")}if(!document.querySelector("#create_bail_invoice").checked&&document.querySelector("#create_invoice").checked){document.querySelector("#invoice_bail_actual_prefix").value="",document.querySelector("#invoice_bail_actual_number").value="";let e=0;e=parseInt(invoiceInits.next_number)+1,e=String(e).padStart(5,"0"),document.querySelector("#invoice_rent_actual_number").value=e,document.querySelector("#invoice_rent_actual_prefix").value=invoiceInits.prefix,o(".generate_rent_invoice_novat","inactive"),a(".generate_bail_invoice_novat","inactive")}if(document.querySelector("#create_bail_invoice").checked&&document.querySelector("#create_invoice").checked){let e=0;e=parseInt(invoiceInits.next_number)+1,e=String(e).padStart(5,"0"),document.querySelector("#invoice_bail_actual_number").value=e,document.querySelector("#invoice_bail_actual_prefix").value=invoiceInits.prefix,e=parseInt(invoiceInits.next_number)+2,e=String(e).padStart(5,"0"),document.querySelector("#invoice_rent_actual_number").value=e,document.querySelector("#invoice_bail_actual_prefix").value=invoiceInits.prefix,o(".generate_rent_invoice_novat","inactive"),o(".generate_bail_invoice_novat","inactive")}}function p(){let e=0;e=document.querySelector("#invoice_rent_actual_number").value,document.querySelector("#invoice_rent_variable_symbol").value=e,e=document.querySelector("#invoice_bail_actual_number").value,document.querySelector("#invoice_bail_variable_symbol").value=e}class h{constructor(){this.generatePapers=function(){void 0!==_&&null!=_&&(document.querySelector("#pattern").value=_.dataset.pattern,document.querySelector("#orderId").value=_.dataset.orderId,document.querySelector("#type").value=_.dataset.type,document.querySelector(".inv").submit())}}}document.addEventListener("DOMContentLoaded",(function(e){if("undefined"!=typeof pagetype&&("order new"==pagetype||"order edit"==pagetype)){function e(e,t){let r=["#name","#phone","#email","#birth_number","#identity_card_number","#lease_date_from","#lease_date_to","#mileage","#price","#vehicle_handover_date","#vehicle_handover_place","#vehicle_return_date","#vehicle_return_place","#vehicle_handover_time","#vehicle_return_time","#bail_value"];0==document.querySelector("#is_company").value&&(r=r.concat(["#birth_date","#street","#zip","#town"])),1==document.querySelector("#is_company").value&&(r=r.concat(["#permanent_residence","#company_name","#company_street","#company_zip","#company_town","#ico"])),document.querySelector("#create_bail_cash_register").checked&&(r=r.concat(["#cash_register_bail_actual_prefix","#cash_register_bail_actual_number","#cash_register_bail_payment_date","#cash_register_bail_full_number"])),document.querySelector("#create_bail_invoice").checked&&(r=r.concat(["#invoice_bail_actual_prefix","#invoice_bail_actual_number","#invoice_bail_issue_date","#invoice_bail_supply_date","#invoice_bail_due_at","#invoice_bail_variable_symbol"])),document.querySelector("#create_cash_register").checked&&(r=r.concat(["#cash_register_rent_actual_prefix","#cash_register_rent_actual_number","#cash_register_rent_payment_date"])),document.querySelector("#create_invoice").checked&&(r=r.concat(["#invoice_rent_actual_prefix","#invoice_rent_actual_number","#invoice_rent_issue_date","#invoice_rent_supply_date","#invoice_rent_due_at","#invoice_rent_variable_symbol"])),document.querySelector("#different_bill_address").checked&&(r=r.concat(["#billing_name","#billing_street","#billing_zip","#billing_town"]));let a=new i;a.mandatories=r,a.optionals=["#is_company","#dic","#contractual_fine","#use_rider","#invoice_bail_payment_method","#create_bail_invoice","#create_bail_cash_register","#invoice_rent_payment_method","#create_invoice","#create_cash_register","#operator_id","#car_id","#contractual_fine","#note","#status","#different_bill_address","#billing_ico","#billing_dic"];let o=a.process();!1!==o&&(o.append("invoice_base_number",invoiceInits.number),o.append("invoice_base_prefix",invoiceInits.prefix),o.append("cash_register_base_number",cashRegisterInits.number),o.append("cash_register_base_prefix",cashRegisterInits.prefix),o.append("cash_register_rent_full_number",""+document.querySelector("#cash_register_rent_actual_prefix").value.trim()+document.querySelector("#cash_register_rent_actual_number").value.trim()),o.append("cash_register_bail_full_number",""+document.querySelector("#cash_register_bail_actual_prefix").value.trim()+document.querySelector("#cash_register_bail_actual_number").value.trim()),o.append("invoice_rent_full_number",""+document.querySelector("#invoice_rent_actual_prefix").value.trim()+document.querySelector("#invoice_rent_actual_number").value.trim()),o.append("invoice_bail_full_number",""+document.querySelector("#invoice_bail_actual_prefix").value.trim()+document.querySelector("#invoice_bail_actual_number").value.trim()),o.append("booking_id",bookingId),o.append("id",id),n(".load_overlay"),fetch(save_order_ajax_url,{method:"POST",body:o,cache:"no-cache"}).then((e=>{if(!e.ok)throw new Error("Network response error");return e.json()})).then((t=>{e?show_success.play(0):(n(".download_overlay"),(new h).generatePapers()),c(".load_overlay")})).catch((function(e){console.log(e)})))}autosize(document.querySelectorAll(".auto_resize")),Array.from(document.querySelectorAll(".select_type")).forEach((e=>{let r=e.id,n=new vanillaSelectBox("#"+r,{maxSelect:1});t.put(e,"vanillaSelectBox",n)})),Array.from(document.querySelectorAll(".datetime_picker")).forEach((e=>{let r=new Datepick(e,{language:"cs",autohide:!0});t.put(e,"Datepick",r)})),Array.from(document.querySelectorAll(".mikro")).forEach((e=>{IMask(e,{mask:/^[\d:]+$/})})),r("#invoice_rent_payment_method","change",(function(e){"cash"==e.value&&(document.querySelector("#create_cash_register").checked=!0)})),document.querySelector("#invoice_rent_payment_method").dispatchEvent(new Event("change")),r("#invoice_bail_payment_method","change",(function(e){"cash"==e.value&&(document.querySelector("#create_bail_cash_register").checked=!0)})),document.querySelector("#invoice_bail_payment_method").dispatchEvent(new Event("change")),r("#is_company","change",(function(e){0==e.value?(a(".for_business","hidden"),o(".for_person","hidden")):(a(".for_person","hidden"),o(".for_business","hidden"))})),document.querySelector("#is_company").dispatchEvent(new Event("change")),r("#different_bill_address","change",(function(e){e.checked?o(".for_different_bill_address","hidden"):a(".for_different_bill_address","hidden")})),r("#create_bail_invoice","change",(function(t){t.checked?(o(".for_bail_invoice","hidden"),o("#invoice_novat_bail","inactive")):(a(".for_bail_invoice","hidden"),a("#invoice_novat_bail","inactive")),d(),m(),p(),"order edit"==pagetype&&e(!0)})),r("#create_bail_cash_register","change",(function(t){t.checked?(o(".for_bail_cash","hidden"),o("#cash_register_novat_bail","inactive")):(a(".for_bail_cash","hidden"),a("#cash_register_novat_bail","inactive")),d(),m(),p(),"order edit"==pagetype&&e(!0)})),r("#create_invoice","change",(function(t){t.checked?(o(".for_rent_invoice","hidden"),o("#invoice_novat_rent","inactive")):(a(".for_rent_invoice","hidden"),a("#invoice_novat_rent","inactive")),d(),m(),p(),"order edit"==pagetype&&e(!0)})),r("#create_cash_register","change",(function(t){t.checked?(o(".for_rent_cash","hidden"),o("#cash_register_novat_rent","inactive")):(a(".for_rent_cash","hidden"),a("#cash_register_novat_rent","inactive")),d(),m(),p(),"order edit"==pagetype&&e(!0)})),r("#invoice_rent_actual_number, #invoice_bail_actual_number","input",(function(){p()})),r(".payment_method","input change",(function(e){s(e.closest(".admin_block"))})),r(".issue_date","input",(function(e){s(e.closest(".admin_block")),function(e){let r=e.querySelector(".issue_date"),n=e.querySelector(".supply_date"),c=0;c=new Date(t.get(r,"Datepick").getDate("mm/dd/yyyy")),c.setHours(0,0,0,0),t.get(n,"Datepick").setDate(c)}(e.closest(".admin_block"))})),r("#price, #contractual_fine","input change",(function(){let e=parseInt(document.querySelector("#price").value);Number.isNaN(e)&&(e=0);let t=parseInt(document.querySelector("#contractual_fine").value);Number.isNaN(t)&&(t=0),document.querySelector("#invoice_price").value=e+t})),document.querySelector("#price").dispatchEvent(new Event("change")),r(document,"input change",".red_error",(function(e){e.classList.remove("red_error"),e.closest(".js_parent").querySelector(".this_element_name").classList.remove("red_error")})),_="",r(".generate_paper","click",(function(t){_=t,e(!1)})),r(".save","click",(function(){e(!0)})),r(".download_overlay_button","click",(function(){c(".download_overlay")}))}if("undefined"!=typeof pagetype&&"order places"==pagetype&&r(".save","click",(function(){let e=new FormData;Array.from(document.querySelectorAll("input")).forEach((t=>{e.append(t.id,t.value.trim())})),n(".load_overlay"),fetch(save_places_ajax_url,{method:"POST",body:e,cache:"no-cache"}).then((e=>{if(!e.ok)throw new Error("Network response error");return e.json()})).then((e=>{c(".load_overlay"),show_success.play(0)})).catch((function(e){console.log(e)}))})),"undefined"!=typeof pagetype&&"order index"==pagetype){function e(e,t=!1){let r=new u(e);t?a++:a=1,n(".load_overlay"),fetch(load_ajax_url,{method:"POST",body:r,cache:"no-cache"}).then((e=>{if(!e.ok)throw new Error("Network response error");return e.json()})).then((e=>{t?document.querySelector(".booking_table tbody").insertAdjacentHTML("afterend",e.html):document.querySelector(".booking_table tbody").innerHTML=e.html,e.can_load_more?n(".load_more_records","inline-block"):c(".load_more_records"),document.querySelector(".records_found span").textContent=e.count,l(),c(".load_overlay")})).catch((function(e){console.log(e)}))}let a=1;const o={placement:"top",html:!0,delay:{show:700,hide:0},offset:"0, 1"},i=new Map([[".admin_ico.admin_edit","Upravit záznam"],[".admin_ico.admin_cancel","Stornovat objednávku"],[".admin_ico.admin_finish","Ukončit vyřízenou objednávku"]]);let l=function(){!function(e,t){e.forEach((function(e,r){Array.from(document.querySelectorAll(r)).forEach((function(r,n){t.title=e,new Tooltip(r,t)}))}))}(i,o)};l(),Array.from(document.querySelectorAll(".select_type")).forEach((e=>{let r=e.id,n=new vanillaSelectBox("#"+r,{maxSelect:1});n.disableItems(["0"]),t.put(e,"vanillaSelectBox",n)})),Array.from(document.querySelectorAll(".datetime_picker")).forEach((e=>{let r=new Datepick(e,{language:"cs",autohide:!0});t.put(e,"Datepick",r)})),e({filters:{},page:1},!0),r(".reset_filters","click",(function(e){let r=e.closest(".data_processors_content");Array.from(r.querySelectorAll("input, select")).forEach((function(e){e.value="",e.dispatchEvent(new Event("change"))})),Array.from(r.querySelectorAll(".select_type")).forEach((function(e){t.get(e,"vanillaSelectBox").setValue("0")})),document.querySelector(".use_filters").dispatchEvent(new Event("click"))})),r(".dpc, .close_dpc_group","click",(function(e){if(e.classList.contains("opened")){document.querySelector('.dpc[data-type="'+e.dataset.type+'"]').classList.remove("opened"),document.querySelector('.close_dpc_group[data-type="'+e.dataset.type+'"]').classList.remove("opened");let t=document.querySelector('.data_processors_content[data-type="'+e.dataset.type+'"]');TweenMax.to(t,.5,{height:0})}else{document.querySelector('.dpc[data-type="'+e.dataset.type+'"]').classList.add("opened"),document.querySelector('.close_dpc_group[data-type="'+e.dataset.type+'"]').classList.add("opened");let t=document.querySelector('.data_processors_content[data-type="'+e.dataset.type+'"]');TweenMax.set(t,{height:"auto"}),TweenMax.from(t,.5,{height:0})}})),r(".data_processors_content input, .data_processors_content select","input change",(function(e){let t=!1,r=e.closest(".data_processors_content");Array.from(r.querySelectorAll("input, select")).forEach((function(e){e.value&&""!=e.value.trim()&&0!=e.value&&(t=!0)})),t?document.querySelector('.dpc[data-type="'+r.dataset.type+'"]').classList.add("is_activated"):document.querySelector('.dpc[data-type="'+r.dataset.type+'"]').classList.remove("is_activated")})),r(".use_filters","click",(function(r){let n={};Array.from(document.querySelectorAll(".data_processors input, .data_processors select")).forEach((function(e){if(e.value&&""!=e.value.trim()&&0!=e.value){let r=e.value.trim();if(t.has(e,"Datepick")){let n=new Date(t.get(e,"Datepick").getDate("mm/dd/yyyy"));e.classList.contains("from")?(n.setHours(0,0,0,0),r=Math.ceil(n.getTime()/1e3)):(n.setHours(23,59,59,999),r=Math.floor(n.getTime()/1e3))}n[e.id]={value:r,type:e.dataset.filterType,operator:e.dataset.operator}}})),e({filters:n,page:1},!1)})),r(".load_more_records","click",(function(){e({filters:{},page:a},!0)})),r(document,"click",".admin_cancel",(function(e){let t={id:e.dataset.id,new_status:"canceled"},r=new u(t);n(".load_overlay"),fetch(status_ajax_url,{method:"POST",body:r,cache:"no-cache"}).then((e=>{if(!e.ok)throw new Error("Network response error");return e.json()})).then((e=>{c(".load_overlay"),document.querySelector(".use_filters").dispatchEvent(new Event("click"))})).catch((function(e){console.log(e)}))})),r(document,"click",".admin_finish",(function(e){let t={id:e.dataset.id,new_status:"canceled"},r=new u(t);n(".load_overlay"),fetch(status_ajax_url,{method:"POST",body:r,cache:"no-cache"}).then((e=>{if(!e.ok)throw new Error("Network response error");return e.json()})).then((e=>{c(".load_overlay"),document.querySelector(".use_filters").dispatchEvent(new Event("click"))})).catch((function(e){console.log(e)}))}))}if("undefined"!=typeof pagetype&&"order numbering"==pagetype){Array.from(document.querySelectorAll(".prefix")).forEach((e=>{IMask(e,{mask:/^[\dA-Za-z0-9]{0,10}$/})})),Array.from(document.querySelectorAll(".only_digits_limited")).forEach((e=>{IMask(e,{mask:Number,scale:0,signed:!1,thousandsSeparator:"",max:99999})}));let e=!1,t=!1;const a=document.querySelector("#invoice_numbering_prefix").value,o=document.querySelector("#invoice_numbering_number").value,i=document.querySelector("#cash_register_numbering_prefix").value,l=document.querySelector("#cash_register_numbering_number").value;r("#invoice_numbering_prefix, #invoice_numbering_number","input",(function(){let e=document.querySelector("#invoice_numbering_prefix").value+document.querySelector("#invoice_numbering_number").value.padStart(5,"0");document.querySelector(".invoice_numbering_example span").textContent=e})),r("#cash_register_numbering_prefix, #cash_register_numbering_number","input",(function(){let e=document.querySelector("#cash_register_numbering_prefix").value+document.querySelector("#cash_register_numbering_number").value.padStart(5,"0");document.querySelector(".cash_register_numbering_example span").textContent=e})),r(".save","click",(function(){e=document.querySelector("#invoice_numbering_prefix").value!=a||document.querySelector("#invoice_numbering_number").value!=o,t=document.querySelector("#cash_register_numbering_prefix").value!=i||document.querySelector("#cash_register_numbering_number").value!=l;let r={invoiceNumberingChanged:Number(e),cashRegisterNumberingChanged:Number(t),invoice_numbering_prefix:document.querySelector("#invoice_numbering_prefix").value,invoice_numbering_number:document.querySelector("#invoice_numbering_number").value,cash_register_numbering_prefix:document.querySelector("#cash_register_numbering_prefix").value,cash_register_numbering_number:document.querySelector("#cash_register_numbering_number").value},_=new u(r);n(".load_overlay"),fetch(save_numberings_ajax_url,{method:"POST",body:_,cache:"no-cache"}).then((e=>{if(!e.ok)throw new Error("Network response error");return e.json()})).then((e=>{c(".load_overlay"),show_success.play(0)})).catch((function(e){console.log(e)}))}))}}))}();