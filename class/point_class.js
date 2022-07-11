/* 
  스태틱 메소드는 클래스의 인스턴스화 없이도 호출될 수 있으며 클래스 인스턴스를 통해서는 호출될 수 없다.
  이것은 어플리케이션을 위한 유틸리티 기능을 생성하기 위해 자주 사용됩니다.
*/
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // static method는 개별 인스턴스의 메소드가 아니다.
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
