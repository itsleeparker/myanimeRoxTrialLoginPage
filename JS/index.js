var flag = 0;
//make sure to not accept the form directly
$('form input').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

//check if all the inputs are complete or not 
$('button').click(function(e){
  if(flag === 1){
    $('button').attr('type' , 'button');
  }
  else{
    $('button').attr('type' , 'submit');
  }
})

flag = $('input').focus(function(e){
  var name = $(this).attr('id');
  if(! $(this).val())
    {
      $('span[name='+name+']').addClass('warning');
      $('#'+name).addClass('warning-box');
      $('input').each(function(){
        var data = $(this).val() ;
      if(data.length > 0)
      {
         name = $(this).attr('id');
          $('span[name='+name+']').removeClass('warning');
          $('#'+name).removeClass('warning-box');
          flag = 0;
      }
    })
    }
    return flag;
})