<template>
  <div>
    <div class="title">Jive View</div>
    <span>
      <div class="grid-container1 no-select">
        <div class="grid-item1">
          <label>Customer Name:</label>
          <input id="customerNameJiveView" v-model="customerName">
        </div>
      </div>
      <div class="grid-container2 no-select">
        <div class="grid-item2">
          <form action="#">
            <label for="tracert">Tracert Dual NAT:</label>
            <p>
              <label>
                <input name="tracert" type="radio" value="True" v-model="tracert">
                <span>True</span>
              </label>
            </p>
            <label>
              <input name="tracert" type="radio" value="False" v-model="tracert">
              <span>False</span>
            </label>
            <p></p>
          </form>
        </div>
        <div class="grid-item2">
          <form action="#">
            <label for="tracert">SIP ALG:</label>
            <p>
              <label>
                <input name="sipalg" type="radio" value="True" v-model="sipALG">
                <span>True</span>
              </label>
            </p>
            <label>
              <input name="sipalg" type="radio" value="False" v-model="sipALG">
              <span>False</span>
            </label>
            <p></p>
          </form>
        </div>
      </div>
      <div class="grid-container3 no-select">
        <div class="grid-item3">
          <label>Ping MAX:</label>
          <input type="number" v-model="pingMAX">
        </div>
        <div class="grid-item3">
          <label>Ping MIN:</label>
          <input type="number" v-model="pingMIN">
        </div>
        <div class="grid-item3">
          <label id="pingDiffLabel">Ping Difference:</label>
          <input id="pingDiffInput" type="number" v-model="pingDiff" readonly>
        </div>
      </div>
      <div class="grid-container2 no-select">
        <div class="grid-item2">
          <label>Packet Loss:</label>
          <input type="number" v-model="packetLoss">
        </div>
        <div class="grid-item2">
          <label>Jitter:</label>
          <input type="number" v-model="jitter">
        </div>
        <div class="grid-item2">
          <label>mbps UP:</label>
          <input type="number" v-model="bandwidthUP">
        </div>
        <div class="grid-item2">
          <label>mbps DOWN:</label>
          <input type="number" v-model="bandwidthDOWN">
        </div>
      </div>
      <div class="grid-container3 no-select">
        <div class="grid-item2">
          <label class="bandwidthResults">Mbps UP:</label>
          <input
            class="input bandwidthResults"
            id="mbps"
            v-model="bandwidthUP"
            type="number"
            placeholder="0"
            readonly
          >
        </div>
        <div class="grid-item3">
          <label class="bandwidthResults">Kbps:</label>
          <input
            class="input bandwidthResults"
            id="kbps"
            v-model="kbps"
            type="number"
            placeholder="0"
            readonly
          >
        </div>
        <div class="grid-item2">
          <label class="bandwidthResults">Number of Phones:</label>
          <input
            class="input bandwidthResults"
            id="numberOfPhones"
            v-model="numberofPhonesCalc"
            type="number"
            placeholder="0"
            readonly
          >
        </div>
      </div>
      <div id="jiveViewButtons" class="buttons">
        <Button class="button" buttonTitle="clear" @click="showModal = true"/>
        <Button
          class="button2"
          buttonTitle="copy"
          @click="copyNotes()"
          :disabled="!customerName || !tracert || !sipALG || !packetLoss || !jitter || !bandwidthDOWN || !bandwidthUP || !pingMAX || !pingMIN"
        />
      </div>
      <Modal v-if="showModal" @close="showModal = false">
        <span slot="header">Confirm Clear</span>
        <i slot="footer" id="clearIconModal" class="material-icons" @click="showModal = false">close</i>
        <i slot="footer" id="copyIconModal" class="material-icons" @click="clearNotes()">check</i>
      </Modal>
      <span id="jiveViewText">
        Hello
        {{ customerName }},
        <br>
        <br>Thank you for your patience while I ran these tests, here are my findings:
        <br>
        <br>- Trace Route (dual/double NATing):
        <b>{{ tracert }}</b>
        <br>- Ping test showed
        <b>{{ jitter }}ms jitter and {{ packetLoss }}% packet loss.</b>
        <br>- SIP ALG:
        <b>{{ sipALG }}</b>
        <br>- Bandwidth:
        <b>{{bandwidthUP}} mbps UP, {{bandwidthDOWN}} mbps DOWN</b>
        <br>
        <br>I've included a more detailed description of what these results mean below:
        <br>
        <br>Trace Route: We run a traceroute to ensure you're not dual/double NATing. Dual NAT occurs when two routers that use the same Network Address Translation are interconnected. It is a common configuration error within local networks.
        <br>
        <br>NAT (Network Address Translation) is a function used by routers to interchange packets between two networks, it converts the addresses used in the transported packages in real time. When you try to access a Web site, the second router will modify the package to contain the original address and the private IP which had been assigned to it by the first router as the public address, then the first router will modify its direction of the package to contain your real public IP and private IP of the second router. As you can see, when this packet returns from the destination, the routers are confused. With double-NAT you can only perform basic operations on the internet, but not much more and is not recommended for VoIP use. From our results you are not.
        <br>
        <br>Bandwidth: We solely concentrate on upload speed to ensure you're not exceeding your bandwidth. We showed your upload speed to be maxing out at
        <b>{{bandwidthUP}} mbps</b>; with that upload speed you can use up to
        <b>{{numberofPhonesCalc}} phones</b> simultaneously until you're maxing out your bandwidth. Please keep in mind these calculations are on the assumption that the phones are on their own network; if they're being used on the same network as computers that are used for social media, audio or video streaming then the number of allowed devices is significantly decreased. If you're exceeding your bandwidth then I would recommend contacting your ISP (Internet Service Provider).
        <br>
        <br>Ping: VOIP phones transmit packets in real time because these conversations are taking place in real time. For a clear communication these packets need to be received consistently and in order, if that doesn't happen that's when you experience audio issues. To test this, we ran a ping test; a constant connection has a ping difference of no more than 5ms per ping and that is what we recommend for optimal performance. The maximum we would recommend is a difference of 10ms per ping but beyond that is when we would expect to see audio issues, even at that level audio won't be great. In the ping tests we ran we saw it jump from
        <b>{{ pingMIN }}ms to {{ pingMAX }}ms</b>
        which is a difference of
        <b>{{ pingDiff }}ms</b> that's significantly higher than the 10ms maximum we recommend. We also saw a
        <b>{{ packetLoss }}%</b> of packet loss, meaning of the data sent
        <b>{{ packetLoss }}%</b> was lost. Although a small number this would still cause loss of audio, you want 0 packet loss and 0% packet loss. Please contact your internet service provider and explain to them that you are running several networked devices for your company there and they need to see what can be done to get your internet signal more consistent.
        <br>
        <br>ISP's are used to getting calls from people reporting internet speed issues or that the internet is down so make sure they understand that the speed is not the problem but the consistency. If the first person you contact does not understand latency/jitter nor why it is important that these not be present on a network you would want to request to escalate. You can experience call quality issues if the ping/jitter times were at the levels you are currently getting because the packets of information bringing in the sound for calls will come in out of order if the consistency is not there. Generally, there are three possible things that you should expect them to do when you call to clear these issues up. They can either fix it from their end by making a routing change or placing you on a different circuit, they may possibly have you do something on your end, or they might send a field technician out to your location to resolve it. At any rate, after they have done whatever they determine is necessary to fix it you should see lower and tighter ping response times when you run that test.
        <br>
        <br>SIP ALG stands for Application Layer Gateway, and is common in many commercial routers. It intends to prevent some of the problems caused by router firewalls by inspecting VoIP traffic (packets) and if necessary modifying it.
        <br>
        <br>Many routers have SIP ALG turned on by default. There are various solutions for SIP clients behind NAT, some of them in client side (STUN, TURN, ICE), others in server side (Proxy RTP as RtpProxy,MediaProxy). ALG works typically in the client LAN router or gateway. In some scenarios some client side solutions are not valid, for example STUN with symmetric NAT router. If the SIP proxy doesn't provide a server side NAT solution, then an ALG solution could have a place.
        <br>
        <br>An ALG understands the protocol used by the specific applications that it supports (in this case SIP) and does a protocol packet-inspection of traffic through it. A NAT router with a built-in SIP ALG can rewrite information within the SIP messages (SIP headers and SDP body) making signaling and audio traffic between the client behind NAT and the SIP endpoint possible.
        <br>Even though SIP ALG is intended to assist users who have phones on private IP addresses, in many cases it is implemented poorly and actually causes more problems than it solves. SIP ALG modifies SIP packets in unexpected ways, corrupting them and making them unreadable. This can give you unexpected behavior, such as phones not registering and incoming calls failing. Therefore, if you are experiencing problems, we recommend that you check your router settings and turn SIP ALG off if it is enabled.
        <br>
        <br>Lack of incoming calls: When a UA is switched on it sends a REGISTER to the proxy in order to be localizable and receive incoming calls. This REGISTER is modified by the ALG feature (if not the user wouldn't be reachable by the proxy since it indicated a private IP in REGISTER "Contact" header). Common routers just maintain the UDP "connection" open for a while (30-60 seconds) so after that time the port forwarding is ended, and incoming packets are discarded by the router. Many SIP proxies maintain the UDP keep alive by sending OPTIONS or NOTIFY messages to the UA, but they just do it when the UA has been detected as NATed during the
        registration. A SIP ALG router rewrites the REGISTER request so the proxy doesn't detect the NAT and doesn't maintain the keepalive (so incoming calls will be not possible).
        <br>
        <br>Breaking SIP signaling: Many of the actual common routers with inbuilt SIP ALG modify SIP headers and the SDP body incorrectly, breaking SIP and making communication just impossible. Some of them do a whole replacing by searching a private address in all SIP headers and body and replacing them with the router public mapped address (for example, replacing the private address if it appears in "Call-ID" header, which makes no sense at all). Many SIP ALG routers corrupt the SIPmessage when writing into it (i.e. missed semi-colon ";" in header parameters). Writing incorrect port values greater than 65536 is also common in many of these routers. Disallows server side solutions: Even if you don't need a client side NAT solution (your SIP proxy gives you a server NAT solution), if your router has SIP ALG enabled that breaks SIP signaling, it will make communication with your proxy impossible.
        <br>
        <br>Router Configurations: It may be best, also, if you made some configuration changes on the router for optimal VoIP usage. Not all routers have these settings available for adjustment, but please make sure that as many are configured correctly as possible.
        <br>
        <br>-DNS Servers: Please set the first two options to 8.8.8.8 and 8.8.4.4.
        <br>-PORTS 5060 & 5061 should be open on your firewall for UDP traffic.
        <br>-SIP ALG: Found under firewall settings. Must be disabled.
        <br>-SPI Firewall: Found under firewall settings. Must be disabled.
        <br>-UDP Timeout: Found under firewall settings. Usually set to 30 seconds by default. Should be increased to at least 300 seconds.
        <br>-SIP Transformations: Found under firewall settings. Must be disabled.
        <br>-Consistent NAT: Found under firewall settings. Must be enabled.
        <br>
        <br>The SIP ALG and SPI Firewall settings are the most important on this list. If your router does not have the ability to disable either of these settings, that is a good indication that they are enabled in the firmware of the router. Sometimes your ISP or IT department will have the ability to modify these settings, however if they are also unable to modify these functions then we would recommend that you consider replacing your router with one from our trusted list of routing devices.
        <br>
        <br>FIREWALL RULES
        <br>It can also be helpful to create rules allowing all traffic to and from our IP blocks. This ensures that data flowing between your router and our servers will be uninterrupted and unfettered.
        <br>199.36.248.0/22
        <br>199.87.120.0/22
        <br>162.250.60.0/22
        <br>
        <br>Once these issues are resolved you'll see a significant improvement to your connection. We're more than happy to talk with you to your Internet Provider in the same call. We only ask that you have them on the line first and then call us and conference us in. Make sure to reference your case number that's in the subject line
        of this email. You can do it any time with us because we're available 24/7. If you're not going to conference one of us in, please email me back and let me know how your call with your ISP went.
        <br>
        <br>Thank you,
      </span>
    </span>
  </div>
</template>

<script>
import Tooltip from "./Tooltip";
import Button from "./Button";
import Modal from "./Modal";
export default {
  data: () => ({
    singleLine: 82.5,
    customerName: "",
    tracert: "",
    // pingTest: "",
    sipALG: "",
    packetLoss: "",
    jitter: "",
    bandwidthDOWN: "",
    bandwidthUP: "",
    numberOfPhones: "",
    mbps: null,
    kbps: null,
    numberofPhonesCalc: null,
    pingMAX: null,
    pingMIN: null,
    pingDiff: null,
    showModal: false
  }),
  components: {
    Tooltip,
    Modal,
    Button
  },
  methods: {
    copyNotes() {
      document.execCommand("unselect");
      document.execCommand("selectAll");
      document.execCommand("copy");
      document.execCommand("unselect");
      console.log("copy");
      this.displayNotificationSuccess();
    },
    clearNotes() {
      this.customerName = "";
      this.tracert = "";
      this.sipALG = "";
      this.packetLoss = "";
      this.jitter = "";
      this.bandwidthDOWN = "";
      this.bandwidthUP = "";
      this.numberOfPhones = "";
      this.mbps = "";
      this.kbps = "";
      this.numberofPhonesCalc = "";
      this.pingMAX = "";
      this.pingMIN = "";
      this.pingDiff = "";
      document.getElementById("customerNameJiveView").focus();

      this.showModal = false;
      this.displayNotificationWarning();
    },
    displayNotificationSuccess() {
      this.$snotify.success("Copied!");
    },
    displayNotificationWarning() {
      this.$snotify.warning("Cleared!");
    }
  },
  watch: {
    customerName() {
      console.log("Updated customerName to: " + this.customerName);
      localStorage.setItem("customerName", JSON.stringify(this.customerName));
    },
    bandwidthUP(newVal) {
      this.kbps = newVal * 1000;
      console.log("Updated bandwidthUP to: " + this.bandwidthUP);
      localStorage.setItem("bandwidthUP", JSON.stringify(this.bandwidthUP));
    },
    bandwidthDOWN() {
      console.log("Updated bandwidthDOWN to: " + this.bandwidthDOWN);
      localStorage.setItem("bandwidthDOWN", JSON.stringify(this.bandwidthDOWN));
    },
    kbps(newVal) {
      this.numberofPhonesCalc = newVal / 82.5;
      console.log("Updated kbps to: " + this.kbps);
      localStorage.setItem("kbps", JSON.stringify(this.kbps));
    },
    numberofPhonesCalc(newVal) {
      this.numberofPhonesCalc = parseFloat(newVal).toFixed(0);
    },
    pingMIN() {
      this.pingDiff = this.pingMAX - this.pingMIN;
      console.log("Updated pingMIN to: " + this.pingMIN);
      localStorage.setItem("pingMIN", JSON.stringify(this.pingMIN));
    },
    pingMAX() {
      this.pingDiff = this.pingMAX - this.pingMIN;
      console.log("Updated pingMAX to: " + this.pingMAX);
      localStorage.setItem("pingMAX", JSON.stringify(this.pingMAX));
    },
    packetLoss() {
      console.log("Updated packetLoss to: " + this.packetLoss);
      localStorage.setItem("packetLoss", JSON.stringify(this.packetLoss));
    },
    jitter() {
      console.log("Updated jitter to: " + this.jitter);
      localStorage.setItem("jitter", JSON.stringify(this.jitter));
    },
    sipALG() {
      console.log("Updated sipALG to: " + this.sipALG);
      localStorage.setItem("sipALG", JSON.stringify(this.sipALG));
    },
    tracert() {
      console.log("Updated tracert to: " + this.tracert);
      localStorage.setItem("tracert", JSON.stringify(this.tracert));
    }
  },
  mounted() {
    if (localStorage.getItem("customerName"))
      this.customerName = JSON.parse(localStorage.getItem("customerName"));
    if (localStorage.getItem("bandwidthUP"))
      this.bandwidthUP = JSON.parse(localStorage.getItem("bandwidthUP"));
    if (localStorage.getItem("bandwidthDOWN"))
      this.bandwidthDOWN = JSON.parse(localStorage.getItem("bandwidthDOWN"));
    if (localStorage.getItem("kbps"))
      this.kbps = JSON.parse(localStorage.getItem("kbps"));
    if (localStorage.getItem("pingMIN"))
      this.pingMIN = JSON.parse(localStorage.getItem("pingMIN"));
    if (localStorage.getItem("pingMAX"))
      this.pingMAX = JSON.parse(localStorage.getItem("pingMAX"));
    if (localStorage.getItem("packetLoss"))
      this.packetLoss = JSON.parse(localStorage.getItem("packetLoss"));
    if (localStorage.getItem("jitter"))
      this.jitter = JSON.parse(localStorage.getItem("jitter"));
    if (localStorage.getItem("sipALG"))
      this.sipALG = JSON.parse(localStorage.getItem("sipALG"));
    if (localStorage.getItem("tracert"))
      this.tracert = JSON.parse(localStorage.getItem("tracert"));
  }
};
</script>

<style lang='less' scoped>
// label {
//   color: #c4c4c4;
// }

// label,
// span {
//   font-size: 12px;
// }
// input,
// textarea {
//   width: 100%;
//   height: 21px;
//   border: none;
//   outline: none;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;
//   margin-bottom: 25px;
//   font-size: 14px;
//   background-color: transparent;
//   color: #f5f5f5;
//   &:focus {
//     box-shadow: 0 2px 0 0 rgba(255, 255, 255, 0.5);
//   }
// }

input:not([type]):focus:not([readonly]) {
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5);
}

input[type="number"]:not(.browser-default)[readonly="readonly"] {
  color: #f5f5f5;
  border-bottom: none;
}

#jiveViewText {
  display: block;
  margin-top: 45px;
}

.grid-container1 {
  display: grid;
  grid-template-columns: auto;
}
.grid-item1 {
  padding: 10px;
  font-size: 12px;
  text-align: left;
  // background: #424242;
  border-radius: 4px;
  margin: 6px;
}

.grid-container2 {
  display: grid;
  grid-template-columns: auto auto;
}
.grid-item2 {
  padding: 10px;
  font-size: 12px;
  text-align: left;
  // background: #424242;
  border-radius: 4px;
  margin: 6px;
}

.grid-container3 {
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-item3 {
  padding: 10px;
  font-size: 12px;
  text-align: left;
  // background: #424242;
  border-radius: 4px;
  margin: 6px;
}

b {
  font-size: 18px;
}

#customerNameJiveView {
  margin-bottom: 5px;
  height: 35px;
}

#jiveViewButtons {
  margin-top: 10px;
}
#pingDiffLabel,
.bandwidthResults {
  display: block;
  text-align: center;
}

#pingDiffInput {
  text-align: center;
  font-size: 28px;
}

.bandwidthResults {
  text-align: center;
}

[type="radio"]:checked + span:after,
[type="radio"].with-gap:checked + span:after {
  background-color: #C4D600;
}

[type="radio"]:checked + span:after,
[type="radio"].with-gap:checked + span:before,
[type="radio"].with-gap:checked + span:after {
  border: 2px solid #C4D600;
}

[type="radio"]:not(:checked) + span:before,
[type="radio"]:not(:checked) + span:after {
  border: 2px solid #fff;
}

input[type="number"]:not(.browser-default):focus:not([readonly]) {
  -webkit-box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5);
}

:disabled {
  background-color: lightgray;
  color: #696969;
  cursor: not-allowed;
}
</style>
