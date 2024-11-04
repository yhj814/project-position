package com.app.positionback.domain.payment;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {
    @EqualsAndHashCode.Include
    private Long id;
    private String paymentAmount;
    private String paymentStatus;
    private String paymentMethod;
    private String createdDate;
    private String updatedDate;
    private Long noticeId;
    private Long memberId;

    public PaymentVO toVO() {
        return new PaymentVO(id, paymentAmount, paymentStatus, paymentMethod, createdDate, updatedDate, noticeId, memberId);
    }
}