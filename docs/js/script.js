document.querySelector('.btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'CV_Francisco, Archie.pdf'; 
    link.download = 'CV_Archie_Francisco.pdf'; 
    link.click(); 
});