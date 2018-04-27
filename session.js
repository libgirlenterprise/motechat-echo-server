var myDev = {
    'EiToken' : '',
    'SToken' : ''
};

mchat.StartSession(myDev, function(result){
    console.log('StartSession result=%s', JSON.stringify(result));
});
