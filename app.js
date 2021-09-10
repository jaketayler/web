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

function loadingProducts(){
  products.map(function(prod){
    $("#tblProducts tbody").append(
      "<tr>"+
        "<td>" + prod.Codigo + "</td>"+
        "<td>" + prod.Descricao + "</td>"+
        "<td> <button class='btn btn-primary'><i class='fas fa-edit'></i>Editar</button> <button class='btn btn-danger'> <i class='fas fa-trash-alt'></i>Remover</button> </td>"+
      "</tr>"
    )
  });
}

$(document).ready(function(){
  $("#frmCad").hide();

  $(document).on("click", "#btnAdd", adicionar);
  $(document).on("click", "#btnCanelar", cancelar);
  $(document).on("click", "#btnSave", save);

});