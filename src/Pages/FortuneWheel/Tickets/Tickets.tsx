import styles from "./Tickets.module.css";
import TicketsImage from "../../../images/tickets.png";
import SilverTicket from "/silver-ticket.webp";
import GoldTicket from "/gold-ticket.webp";

const Tickets = ({ silverTicketCount, goldTicketCount }) => {
  return (
    <div className={styles["tickets"]}>
      <div>
        <img src={GoldTicket} width={35} alt={""} />
        <span>{goldTicketCount || 0}</span>
      </div>
      <div>
        <img src={SilverTicket} width={35} alt={""} />
        <span>{silverTicketCount || 0}</span>
      </div>
    </div>
  );
};

export default Tickets;
