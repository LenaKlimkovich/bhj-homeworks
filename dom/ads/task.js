const rots = Array.from(document.querySelectorAll('.rotator'));

rots.forEach((r) => {
    const rotators = Array.from(r.querySelectorAll('.rotator__case'));
    let index = 0;
    setInterval(() => {
        rotators[index].classList.remove('rotator__case_active');
        index++;
        if (index >= rotators.length) {
            index = 0;
        }
        rotators[index].classList.add('rotator__case_active');
    }, 1000);
})
 

