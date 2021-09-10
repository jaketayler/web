var products = [];

var product = null; 


function NewProduct(){
  return{
    Codigo: "",
    Descricao: ""
  };
}

function adicionar(){
  product = NewProduct();

  $("#frmList").hide();
  $("#frmCad").show();

  $("#cod").val("");
  $("#desc").val("");
}

function cancelar(){
  $("#frmList").show();
  $("#frmCad").hide();
}

function save(){

  product.Codigo = $("#cod").val();
  product.Descricao = $("#desc").val();

  products.push(product);
  loadingProducts();
 
  $("#cod").val("");
  $("#desc").val("");

  $("#frmList").show();
  $("#frmCad").hide();
}

function edit(){
  $(".btn-edit").each(function(){
      var codProduct = $(this).data("codigo");
      var prodSearch = products.filter(function(prod){
        return prod.Codigo == codProduct;
      })[0];
      
      console.log(prodSearch);

      $("#cod").val(product.Codigo);
      $("#desc").val(product.Descricao);

      $("#frmList").hide();
      $("#frmCad").show();
    });
}

function loadingProducts(){
  products.map(function(prod){
    $("#tblProducts tbody").append(
      "<tr>"+
        "<td>" + prod.Codigo + "</td>"+
        "<td>" + prod.Descricao + "</td>"+
        "<td> <button class='btn btn-edit btn-primary mr-5' data-codigo='" + prod.Codigo + "' onclick='edit()'><i class='fas fa-edit'></i>Editar</button> "+
         "<button class='btn btm-remove btn-danger ml-5' data-codigo='"+ prod.Codigo + "'> <i class='fas fa-trash-alt'></i>Remover</button> </td>"+
      "</tr>"
    )
  });
  edit();
}

$(document).ready(function(){
  $("#frmCad").hide();

  $(document).on("click", "#btnAdd", adicionar);
  $(document).on("click", "#btnCanelar", cancelar);
  $(document).on("click", "#btnSave", save);

});