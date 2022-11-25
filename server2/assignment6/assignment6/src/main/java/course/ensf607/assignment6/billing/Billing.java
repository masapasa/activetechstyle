package course.ensf607.assignment6.billing;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import course.ensf607.assignment6.customer.Customer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor
@Table(name = "billing")
public class Billing implements Serializable {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name="id")
        private Long id;

        private Long cardNumber;

        private Date expiryDate;

        private Integer cvcNumber;
        
//        1
//        @OneToOne(mappedBy = "customer")
//        private Customer customer;

//        2
//        @OneToOne
//        @MapsId
//        @JoinColumn(name = "csutomer_id")
//        private Customer customer;

        
        public Billing(long id, Long cardNumber, Date expiryDate, Integer cvcNumber) {
                this.id = id;
                this.cardNumber = cardNumber;
                this.expiryDate = expiryDate;
                this.cvcNumber = cvcNumber;

        }
        
        public Billing(Long cardNumber, Date expiryDate, Integer cvcNumber) {
                this.cardNumber = cardNumber;
                this.expiryDate = expiryDate;
                this.cvcNumber = cvcNumber;
        }


        
}