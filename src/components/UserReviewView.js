import React, { Component } from 'react';
import './UserReviewView.scss';

export default class UserReviewView extends Component {
  static defaultProps = {
    review: [
      // "id": 361,
      // "comment": "빠르고 맛있어요~또 시킬게요~~",
      // "rating": "5.0",
      // "ratingDelivery": "5.0",
      // "ratingQuantity": "5.0",
      // "ratingTaste": "5.0",
      // "reviewImages": null,
      // "time": "2018-12-06T15:17:50.044301+09:00",
    ],
  };

  render() {
    // 유저 아이디를 어떻게 불러올까? 사용자가 시킨 메뉴는 백엔드에 요청?
    const { review } = this.props;
    return (
      <div className="UserReview">
        <div className="UserReview__avg">
          {/* 점수의 평균을 구하는 법을 알아야 한다 */}
          {/* 점수에 따라 별의 개수를 표현 */}
          <span>평균리뷰점수</span>
          <span>맛평균</span>
          <span>양평균</span>
          <span>배달평균</span>
        </div>
        {/* 어떻게 구해야 할까 */}
        <div className="UserReview__count">리뷰 갯수, 사장님 댓글 갯수</div>
        <div>
          {review.map(r => (
            <div className="UserReview__content" key={r.id}>
              <span className="UserReview__content__name">작성자 </span>
              <span className="UserReview__content__time"> 10시간 전 </span>
              <div className="UserReview__content__ratings">
                {/* 소수점 이하는 버리면 된다. */}
                <p>
                  <span className="UserReview_)content__stars">
                    별 {r.rating}
                  </span>
                  맛★ {Math.trunc(r.ratingTaste)}
                  양★ {r.ratingQuantity}
                  배달★ {r.ratingDelivery}
                </p>
              </div>
              <div className="UserReview__content__order">주문한 음식</div>
              <p className="UserReview__content__comment">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}