const digitSegments = [[1, 2, 3, 4, 5, 6], [2, 3], [1, 2, 7, 5, 4], [1, 2, 7, 3, 4], [6, 7, 2, 3], [1, 6, 7, 3, 4], [1, 6, 5, 4, 3, 7], [1, 2, 3], [1, 2, 3, 4, 5, 6, 7], [1, 2, 7, 3, 6, 4]];
const setNumber = function(digit, number, on) {
  const segments = digit.querySelectorAll('.segment');
  const current = parseInt(digit.getAttribute('data-value'));
  if (!isNaN(current) && current != number) {
    digitSegments[current].forEach(function(digitSegment, index) {
      setTimeout(function() {
            segments[digitSegment - 1].classList.remove('on');
          },
          index * 45)
    });
  }
  if (isNaN(current) || current != number) {
    setTimeout(function() {
          digitSegments[number].forEach(function(digitSegment, index) {
            setTimeout(function() {
                  segments[digitSegment - 1].classList.add('on');
                },
                index * 45)
          });
        },
        250);
    digit.setAttribute('data-value', number);
  }
};
document.addEventListener('DOMContentLoaded',
    function() {
      const _minutes = document.querySelectorAll('.minutes');
      const _seconds = document.querySelectorAll('.seconds');
      const interval = setInterval(function() {
            let minutes;
            let seconds;
            if (seconds_ >= 0) {
              minutes = Math.floor(seconds_ / 60);
              seconds = Math.floor(seconds_ % 60);
              minutes = minutes < 100 && minutes > 9 ?  "0" + minutes : minutes < 10 ? "00" + minutes: minutes = "" + minutes;
              seconds < 10 ? seconds = "0" + seconds : seconds = "" + seconds;
              setNumber(_minutes[0], Math.floor(minutes / 100), 1);
              setNumber(_minutes[1], minutes[1], 1);
              setNumber(_minutes[2], minutes[2], 1);
              setNumber(_seconds[0], Math.floor(seconds / 10), 1);
              setNumber(_seconds[1], seconds % 10, 1);
              if (seconds_ <= 60 || seconds_ == 0) {
                $(".segment").css("background", "red");
                $(".separator").css("background", "red");
              } else {
                $(".segment").css("background", "#79e7ff");
                $(".separator").css("background", "#79e7ff");
              }
              --seconds_;
            } else {
              clearInterval(interval);
              setNumber(_minutes[0], 0, 1);
              setNumber(_minutes[1], 0, 1);
              setNumber(_minutes[2], 0, 1);
              setNumber(_seconds[0], 0, 1);
              setNumber(_seconds[1], 0, 1);
              $(".segment").css("background", "red");
              $(".separator").css("background", "red");
              --seconds_;
              alert('大家快冲冲冲！！！！下游戏啦！大家早点睡觉，要保证充足的睡眠才能应对白天的课程、工作和游戏')
            }
          },
          1000);
    });
