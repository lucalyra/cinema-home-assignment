(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(322)},127:function(e,t,a){},129:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){},316:function(e,t,a){},318:function(e,t,a){},320:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),l=(a(127),a(9)),s=a(10),c=a(12),m=a(11),d=a(13),u=(a(129),a(131),a(133),a(135),a(137),a(39)),p=a(20),v=a.n(p),h=a(26),f=a.n(h),b=a(28),E=a.n(b),O=a(40),g=a.n(O),j=a(31),y=a.n(j),C=a(27),N=a.n(C),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"accept-edit"},i.a.createElement(f.a,{open:this.props.state.openAlert},i.a.createElement(N.a,null,"Ready to send?"),i.a.createElement(g.a,null,i.a.createElement(y.a,{id:"alert-dialog-description"},"Are you sure you want to update this movie?")),i.a.createElement(E.a,null,i.a.createElement(v.a,{onClick:function(){return e.props.editAccepted(!1)}},"No"),i.a.createElement(v.a,{onClick:function(){return e.props.editAccepted(!0)}},"Yes"))))}}]),t}(n.Component),T=a(24),M="GET_MOVIES_LIST_REQUEST",A="GET_MOVIES_LIST_RESPONSE",S="EDIT_MOVIE",k="DELETE_MOVIE",I="ADD_MOVIE",x="ID_GENE",Y=a(54),w=a.n(Y),G=new(function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,[{key:"getMovieByName",value:function(e){return w.a.get("https://www.omdbapi.com/?t="+e+"&type=movie&apikey=ebf7786a")}},{key:"getMovieByImdbId",value:function(e){return w.a.get("https://www.omdbapi.com/?i="+e+"&type=movie&apikey=ebf7786a")}},{key:"getMovieListByName",value:function(e){return w.a.get("https://www.omdbapi.com/?s="+e+"&type=movie&apikey=ebf7786a")}}]),e}());function R(e){return{type:k,payload:e}}function q(e){for(var t in e)!1===/^[a-zA-Z0-9!?&-. +]+$/.test(e[t])&&(e[t]=e[t].replace(/[^a-zA-Z0-9!?&-. +]/g,"")),isNaN(e[t])&&(e[t]=e[t].toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")),""===e[t]&&(e[t]="No Name");return e}var _=a(21),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).editAccepted=function(e){e?(q(a.state),a.props.editMovie({Title:a.state.Title,Year:a.state.Year,Runtime:a.state.Runtime,Genre:a.state.Genre,Director:a.state.Director,imdbID:a.props.movie.imdbID}),a.setState({openAlert:!1}),a.props.openEdit(!1)):a.setState({openAlert:!1})},a.handleChange=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){a.setState({openAlert:!0}),e.preventDefault()},a.handleCancel=function(){a.setState({Title:a.props.movie.Title,Year:a.props.movie.Year,Runtime:a.props.movie.Runtime,Genre:a.props.movie.Genre,Director:a.props.movie.Director}),a.props.openEdit(!1)},a.state={Title:a.props.movie.Title,Year:a.props.movie.Year,Runtime:a.props.movie.Runtime,Genre:a.props.movie.Genre,Director:a.props.movie.Director,openAlert:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"movie-edit"},i.a.createElement(f.a,{open:this.props.isEditOpen},i.a.createElement(N.a,{id:"form-dialog-title"},"Edit Movie"),i.a.createElement(_.ValidatorForm,{className:"add-movie-form",onSubmit:this.handleSubmit},i.a.createElement(_.TextValidator,{validators:["required","isString"],value:this.state.Title,margin:"normal",name:"Title",onChange:this.handleChange,label:"Title",type:"text",errorMessages:["This field is required","Title is not valid"],fullWidth:!0}),i.a.createElement(_.TextValidator,{validators:["required","isNumber","minNumber:1700"],value:this.state.Year,margin:"normal",name:"Year",onChange:this.handleChange,label:"Year",type:"text",errorMessages:["This field is required","Year is not valid","Year is not valid"],fullWidth:!0}),i.a.createElement(_.TextValidator,{validators:["required","isString"],value:this.state.Runtime,margin:"normal",name:"Runtime",onChange:this.handleChange,label:"Runtime",type:"text",errorMessages:["This field is required","Runtime is not valid"],fullWidth:!0}),i.a.createElement(_.TextValidator,{validators:["required","isString"],value:this.state.Genre,margin:"normal",name:"Genre",onChange:this.handleChange,label:"Genre",type:"text",errorMessages:["This field is required","Genre is not valid"],fullWidth:!0}),i.a.createElement(_.TextValidator,{validators:["required","isString"],value:this.state.Director,margin:"normal",name:"Director",onChange:this.handleChange,label:"Director",type:"text",errorMessages:["This field is required","Director's name is not valid"],fullWidth:!0}),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:"movie-edit-btn",type:"submit",color:"primary"}," Save "),i.a.createElement(v.a,{className:"movie-edit-btn",onClick:this.handleCancel,color:"primary"}," Cancel ")))),i.a.createElement(D,{state:this.state,editAccepted:this.editAccepted}))}}]),t}(n.Component),W=Object(T.b)(null,function(e){return{editMovie:function(t){return e(function(e){return{type:S,payload:e}}(t))}}})(V),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"delete-popup"},i.a.createElement(f.a,{open:this.props.isDeleteOpen},i.a.createElement(N.a,null,"Want to delete?"),i.a.createElement(g.a,null,i.a.createElement(y.a,{id:"alert-dialog-description"},'Are you sure you want to delete "',this.props.movie.Title,'"?')),i.a.createElement(E.a,null,i.a.createElement(v.a,{onClick:function(){return e.props.deleteMovie(!1)}},"No"),i.a.createElement(v.a,{onClick:function(){return e.props.deleteMovie(!0)}},"Yes"))))}}]),t}(n.Component),L=a(120),B=a.n(L),z=a(72),U=a.n(z),Z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={anchorEl:null,isEditOpen:!1,isDeleteOpen:!1},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.openEdit=function(e){!0===e?(a.setState({isEditOpen:!a.state.isEditOpen}),a.handleClose()):a.setState({isEditOpen:!a.state.isEditOpen})},a.deleteMovie=function(e){e?(a.props.deleteMovie(a.props.movie),a.setState({isDeleteOpen:!1})):a.setState({isDeleteOpen:!1}),a.handleClose()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"movie-options"},i.a.createElement("i",{className:"fas fa-ellipsis-v",onClick:this.handleClick}),i.a.createElement(B.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.handleClose},i.a.createElement(U.a,{onClick:function(){return e.openEdit(!0)}},"Edit"),i.a.createElement(U.a,{onClick:function(){return e.setState({isDeleteOpen:!0})}},"Delete")),i.a.createElement(W,{isEditOpen:this.state.isEditOpen,openEdit:this.openEdit,movie:this.props.movie}),i.a.createElement(P,{isDeleteOpen:this.state.isDeleteOpen,deleteMovie:this.deleteMovie,movie:this.props.movie}))}}]),t}(n.Component),F=Object(T.b)(null,function(e){return{deleteMovie:function(t){return e(R(t))}}})(Z),J=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"movie-container"},i.a.createElement("div",{className:"movie-picture",style:{backgroundImage:"url(".concat(this.props.movie.Poster,")")}}),i.a.createElement("div",{className:"movie-info"},i.a.createElement("div",{className:"movie-info-header"},i.a.createElement("span",{className:"movie-info-header-text movie-title-year"},this.props.movie.Title," (",this.props.movie.Year,")"),i.a.createElement(F,{movie:this.props.movie})),i.a.createElement("span",{className:"movie-info-text movie-runtime-genre"},this.props.movie.Runtime," | ",this.props.movie.Genre),i.a.createElement("span",{className:"movie-info-text movie-desc"},this.props.movie.Plot),i.a.createElement("div",{className:"movie-info-text movie-director"},i.a.createElement("span",{className:"movie-director-title"},"Director: "),this.props.movie.Director)))}}]),t}(n.Component),X=Object(T.b)(null,function(e){return{deleteMovie:function(t){return e(R(t))}}})(J),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={movies:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchMovies(this.props.moviesId)}},{key:"render",value:function(){return i.a.createElement("div",{className:"movie-display"},this.props.moviesArr.map(function(e){return i.a.createElement(X,{movie:e.data})}))}}]),t}(n.Component),$=Object(T.b)(function(e){return{moviesId:e.moviesId,moviesArr:e.moviesArr,fetching:e.fetching}},function(e){return{fetchMovies:function(t){return e((a=t,function(e){return Promise.all(a.map(function(e){return G.getMovieByImdbId(e)})).then(function(t){e({type:A,payload:t})})}));var a}}})(Q);a(316),a(318);var H=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"duplicate-popup"},i.a.createElement(f.a,{open:this.props.state.isDuplicate},i.a.createElement(N.a,null,"Duplicate"),i.a.createElement(g.a,null,i.a.createElement(y.a,{id:"alert-dialog-description"},'Sorry but the movie "',this.props.state.Title,'" already exists in the database. Try adding another movie.')),i.a.createElement(E.a,null,i.a.createElement(v.a,{onClick:this.props.closeDuplicate},"Ok"))))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){(function(e,t){var a=0;return t.map(function(t){if(t.data.Title===e.Title)return a++}),a})(a.state,a.props.moviesArr)>0?a.setState({isDuplicate:!0}):(q(a.state),a.props.addMovie({Title:a.state.Title,Year:a.state.Year,Runtime:a.state.Runtime,Genre:a.state.Genre,Director:a.state.Director,imdbID:a.props.addId,Poster:"https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png",Plot:"No Plot Added"}),a.props.toggleAddMovie(),a.props.idGene(),a.setState({Title:"",Year:"",Runtime:"",Genre:"",Director:""})),e.preventDefault()},a.closeDuplicate=function(){a.setState({isDuplicate:!1})},a.state={Title:"",Year:"",Runtime:"",Genre:"",Director:"",isDuplicate:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"add-movie"},i.a.createElement(f.a,{open:this.props.addMovieOpen},i.a.createElement(N.a,{className:"add-movie-title"},"Add a Movie"),i.a.createElement(y.a,{className:"add-movie-description"},"Please fill all the fields."),i.a.createElement(_.ValidatorForm,{className:"add-movie-form",onSubmit:this.handleSubmit},i.a.createElement(_.TextValidator,{validators:["required","isString"],value:this.state.Title,margin:"normal",name:"Title",onChange:this.handleChange,label:"Title",type:"text",errorMessages:["This field is required","Title is not valid"],fullWidth:!0}),i.a.createElement(_.TextValidator,{validators:["required","isNumber","minNumber:1700","maxNumber: 2100"],value:this.state.Year,margin:"normal",name:"Year",onChange:this.handleChange,label:"Year",type:"text",errorMessages:["This field is required","Year is not valid","Year is not valid","Year is not valid"],fullWidth:!0}),i.a.createElement(_.TextValidator,{validators:["required","isString"],value:this.state.Runtime,margin:"normal",name:"Runtime",onChange:this.handleChange,label:"Runtime",type:"text",errorMessages:["This field is required","Runtime is not valid"],fullWidth:!0}),i.a.createElement(_.TextValidator,{validators:["required","isString"],value:this.state.Genre,margin:"normal",name:"Genre",onChange:this.handleChange,label:"Genre",type:"text",errorMessages:["This field is required","Genre is not valid"],fullWidth:!0}),i.a.createElement(_.TextValidator,{validators:["required","isString"],value:this.state.Director,margin:"normal",name:"Director",onChange:this.handleChange,label:"Director",type:"text",errorMessages:["This field is required","Director's name is not valid"],fullWidth:!0}),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:"movie-edit-btn",type:"submit",color:"primary"}," Send "),i.a.createElement(v.a,{className:"movie-edit-btn",onClick:this.props.toggleAddMovie,color:"primary"}," Cancel ")))),i.a.createElement(H,{state:this.state,closeDuplicate:this.closeDuplicate}))}}]),t}(n.Component),ee=Object(T.b)(function(e){return{addId:e.addId,moviesArr:e.moviesArr}},function(e){return{addMovie:function(t){return e(function(e){return{type:I,payload:[{data:e,time:Date.now()}]}}(t))},idGene:function(){return e({type:x})}}})(K),te=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggleAddMovie=function(){a.setState({addMovieOpen:!a.state.addMovieOpen})},a.state={addMovieOpen:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header-background"},i.a.createElement("div",{className:"top-header"},i.a.createElement("div",{className:"header-link-container"},i.a.createElement("div",{className:"header-link-btn",onClick:this.toggleAddMovie},i.a.createElement("span",{className:"header-link-text"}," Add Movies ")))),i.a.createElement("div",{className:"header-info"},i.a.createElement("span",{className:"header-title"},"Cinema"),i.a.createElement("span",{className:"header-description"},"Your Movie Organizer")),i.a.createElement(ee,{addMovieOpen:this.state.addMovieOpen,toggleAddMovie:this.toggleAddMovie})))}}]),t}(n.Component),ae=(a(320),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"footer-text"},"Name: Lucas Lyra"),i.a.createElement("div",{className:"footer-text"},"Email: lucalyra@gmail.com"))}}]),t}(n.Component)),ne=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-page"},i.a.createElement(te,null),i.a.createElement($,null),i.a.createElement(ae,null))}}]),t}(n.Component),ie=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(ne,null))}}]),t}(n.Component),re=a(44),oe=a(45),le=a(33),se={moviesId:["tt1987680","tt4154916","tt7616798","tt6101820","tt4633694","tt1650060","tt2709692","tt1571234","tt1727824","tt5715828","tt6966692","tt4123430","tt0137523","tt0485947","tt0756683"],moviesArr:[],fetching:!1,addId:0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{fetching:!0};case A:return Object(le.a)({},e,{moviesArr:t.payload,fetching:!1});case S:return Object(le.a)({},e,{moviesArr:e.moviesArr.map(function(e){return e.data.imdbID===t.payload.imdbID?(e.data=Object(le.a)({},e.data,t.payload),e):e})});case k:return Object(le.a)({},e,{moviesArr:[].concat(Object(oe.a)(e.moviesArr.slice(0,e.moviesArr.findIndex(function(e){return e.data.imdbID===t.payload.imdbID}))),Object(oe.a)(e.moviesArr.slice(e.moviesArr.findIndex(function(e){return e.data.imdbID===t.payload.imdbID})+1)))});case I:return Object(le.a)({},e,{moviesArr:[].concat(Object(oe.a)(e.moviesArr),Object(oe.a)(t.payload))});case x:return Object(le.a)({},e,{addId:e.addId++});default:return e}},me=a(121),de=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,Object(re.c)(ce,Object(re.a)(me.a)));o.a.render(i.a.createElement(T.a,{store:de},i.a.createElement(ie,null)),document.getElementById("root"))}},[[122,2,1]]]);
//# sourceMappingURL=main.a839ac5f.chunk.js.map