//->��̬����REM�Ļ������
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);

//->������������г�ʼ������
~function () {
    var step = 0, divList = null;
    var swp = new Swiper(".swiper-container", {
        direction: 'vertical',
        loop: true,

        onSlidePrevEnd: function () {
            step--;
            change();
            if (step === 0) {
                step = 5;
            }
        },
        onSlideNextEnd: function () {
            step++;
            change();
            if (step === 6) {
                step = 1;
            }
        }
    });


    function change() {
        divList = document.querySelectorAll(".swiper-slide");
        [].forEach.call(divList, function (curDiv, index) {
            curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
        });
    }

    //->����������һ��loop:true��ʱ��,���Լ�����ͷ�ͽ�β������һ��һģһ����,�����һ���Ҫ������λ������ʵ�ĵ�һ�š�,���Կ�ʼ���Լ������л�һ��,�����ó�ʼ��step=0����
}();

//->��Ƶ���Զ�����
~function () {
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];

    //->��ʱ������Ƶ�ļ�,�������������ݼ���
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            //->����Ƶ���Բ��ŵ�ʱ�򴥷�����¼�
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);

    //->�������ͼ��,ʵ����Ƶ����ͣ���߲���
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {//->��ǰ����ͣ��,�����䲥��
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        //->��ǰ�ǲ��ŵ�,��������ͣ
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();

