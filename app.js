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

  if(product.Codigo == ""){
    product.Codigo = $("#cod").val();
    product.Descricao = $("#desc").val();
    
    products.push(product);
    // Verificar se  passou no condição
    console.log("NOVO PRODUTO!!")
    
  } else{    
    // Verifica as informações em cada posição do array de objetos.
    products.map(function(prod){      
      if(product.Codigo == prod.Codigo ){
        product.Descricao = $("#desc").val();
        // Verificar se  passou no condição
        console.log("Produto Editado");
      }
      
    });
  }
  
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
      
      // console.log(prodSearch);

      $("#cod").val(product.Codigo);
      $("#desc").val(product.Descricao);

      $("#frmList").hide();
      $("#frmCad").show();
    });
}


function remove(){
    $(".btn-remove").each(function(btn){
      var codProduct = $(this).data("codigo"); 
      $(this).on("click",function(){
          // console.log(codProduct);
          products = products.filter(function(prod){
            return prod.Codigo != codProduct;
          });
          loadingProducts();
          console.log("Item removido");
        });
      });     
}

function loadingProducts(){
  $("#tblProducts tbody").html("");

  products.map(function(prod){
    $("#tblProducts tbody").append(
      "<tr>"+
        "<td class='col-md-3'>" + prod.Codigo + "</td>"+
        "<td class='col-md-6'>" + prod.Descricao + "</td>"+
        "<td class='col-md-3'> <button class='btn btn-edit btn-primary mr-5' data-codigo='" + prod.Codigo + "' onclick='edit()'><i class='fas fa-edit'></i>Editar</button> "+
         "<button class='btn btn-remove btn-danger ml-5' data-codigo='"+ prod.Codigo + "'> <i class='fas fa-trash-alt'></i>Remover</button> </td>"+
      "</tr>"
    )
  });
  // edit();
  remove();
}

$(document).ready(function(){
  $("#frmCad").hide();

  $(document).on("click", "#btnAdd", adicionar);
  $(document).on("click", "#btnCanelar", cancelar);
  $(document).on("click", "#btnSave", save);

});