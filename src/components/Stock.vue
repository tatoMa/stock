<template>
    <v-app>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon></v-toolbar-side-icon>
                <img src="../assets/61logo.png" height="25">
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <section>
                <v-parallax :src="require('@/assets/hero.jpeg')" height="300">
                    <v-layout
                            column
                            align-center
                            justify-center
                            class="white--text"
                    >
                        <img src="../assets/61logo.png" alt="Vuetify.js" height="70">
                        <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
                        <div class="subheading mb-3 text-xs-center">Created by Jason Ma</div>
                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-layout
                        column
                        wrap
                        class="my-5"
                        align-center
                >
                    <v-flex xs12 sm4 class="my-3">
                        <div class="text-xs-center">
                            <h2 class="headline">The best way to help your financial need!</h2>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-flex xs12>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline text-xs-center">Max Profile Calculator</div>
                                        </v-card-title>
                                        <v-card-text>
                                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card>
                                        <v-card-media id="container" style="width:100%; height:400px">
                                            <v-btn flat color="orange" @click="showStockChart"></v-btn>
                                        </v-card-media>
                                        <v-card-title primary-title>
                                            <v-flex>
                                                <v-layout row wrap>
                                                    <v-flex xs12 sm4>
                                                        <v-subheader v-text="'Select Identifier'"></v-subheader>
                                                    </v-flex>
                                                    <v-flex xs12 sm8>
                                                        <v-select
                                                                :items="identifiers"
                                                                v-model="identifierSelected"
                                                                label="NASDAQ:"
                                                                autocomplete
                                                        ></v-select>
                                                    </v-flex>
                                                </v-layout>
                                                <div>
                                                    <h2 class="text-xs-center">Find the maximum profit</h2>
                                                    <h5 class="text-xs-center" >eg. The max profit of [8,1,5,3,7,4] is {{getMaxProfit([8,1,5,3,7,4])}}</h5>
                                                    <h5 class="text-xs-center" >The max profit of [9,7,5,3,1] is {{getMaxProfit([9,7,5,3,1])}}</h5>
                                                    <v-btn block color="primary" @click="maxProfitCalculator" v-if="stockPricesYesterday.length>0">Calculate</v-btn>
                                                    <v-btn block color="primary" disabled="" v-if="stockPricesYesterday.length<=0">Calculate</v-btn>
                                                    <h2 class="text-xs-center red--text" v-if="maxProfit!==''">The max profit of {{identifierSelected}} is {{maxProfit}}</h2>
                                                    <br/>
                                                </div>
                                            </v-flex>
                                        </v-card-title>
                                        <!--<v-card-actions>-->
                                        <!--<v-btn flat color="orange">Explore</v-btn>-->
                                        <!--</v-card-actions>-->
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </section>
            <!--{{stockPricesYesterday}}-->
            <section>
                <v-parallax :src="require('@/assets/section.jpg')"  height="380">
                    <v-layout column align-center justify-center>
                        <div class="headline white--text mb-3 text-xs-center">Financial has never been easier</div>
                        <em>Kick-start your account today</em>
                        <v-btn
                                class="blue lighten-2 mt-5"
                                dark
                                large
                                href="/pre-made-themes"
                        >
                            Get Started
                        </v-btn>
                    </v-layout>
                </v-parallax>
            </section>

            <section>
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5">
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Company info</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent">
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline">Contact us</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                </v-card-text>
                                <v-list class="transparent">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>777-867-5309</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">place</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>Chicago, US</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text text--lighten-2">email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>

            <v-footer class="blue darken-2">
                <v-layout row wrap align-center>
                    <v-flex xs12>
                        <div class="white--text ml-3">
                            61 Financial Information Technology Pty Ltd
                        </div>
                    </v-flex>
                </v-layout>
            </v-footer>
        </v-content>

        <v-layout>
        </v-layout>
        <!--{{identifierSelected}}-->
        <!--{{stockPricesYesterday}}-->
    </v-app>
</template>

<script>
import Highcharts from 'highcharts/highstock'
var https = require('https')

export default {
    name: 'StockChart',

    data () {
        return {
            title: '61financial',
            username: '9abe0f925790d738fa8b5309b848b921',
            password: '5353dd541c69225b311ac17fd6a53bb1',
            identifierSelected: 'QCOM',
            identifiers: ['QCOM', 'AAPL', 'PIH', 'PIHPP', 'TURN', 'FLWS', 'FCCY', 'SRCE', 'VNET', 'TWOU', 'JOBS', 'EGHT', 'AVHI', 'SHLM', 'AAON', 'ABAX', 'ABEO', 'ABEOW', 'ABIL', 'ABMD', 'AXAS', 'ACIU', 'ACIA', 'ACTG', 'ACHC', 'ACAD', 'ACST', 'AXDX', 'XLRN', 'ANCX', 'ARAY', 'ACRX', 'ACER', 'ACET', 'AKAO', 'ACHV', 'ACHN', 'ACIW', 'ACRS', 'ACMR', 'ACNB', 'ACOR', 'ATVI', 'ACXM', 'ADMS', 'ADMP', 'ADAP', 'ADUS', 'AEY', 'IOTS', 'ADMA', 'ADBE', 'ADOM', 'ADTN', 'ADRO', 'ADES', 'AEIS', 'AMD', 'ADXS', 'ADXSW', 'ADVM', 'ACT', 'AEGN', 'AGLE', 'AEHR', 'AMTX', 'AERI', 'AVAV', 'AEZS', 'AEMD', 'GNMX', 'AFMD', 'AGEN', 'AGRX', 'AGYS', 'AGIO', 'AGMH', 'AGNC', 'AGNCB', 'AGNCN', 'AGFS', 'AGFSW', 'ALRN', 'AIMT', 'AIRT', 'ATSG', 'AIRG', 'AMCN', 'AKAM', 'AKTX', 'AKCA', 'AKBA', 'AKER', 'AKRX', 'AKTS', 'ALRM', 'ALSK', 'ALBO', 'ABDC', 'ALDR', 'ALDX', 'ALXN', 'ALCO', 'ALGN', 'ALIM', 'ALJJ', 'ALKS', 'ABTX', 'ALGT', 'ALNA', 'AMMA', 'ARLP', 'AHPI', 'AMOT', 'ALQA', 'ALLT', 'MDRX', 'ALNY', 'AOSL', 'GOOG', 'GOOGL', 'SMCP', 'ATEC', 'ALPN', 'SWIN', 'AMR', 'AMRWW', 'AABA', 'ALTR', 'ALT', 'ASPS', 'AIMC', 'AMAG', 'AMRN', 'AMRK', 'AMZN', 'AMBC', 'AMBCW', 'AMBA', 'AMCX', 'DOX', 'AMDA', 'AMED', 'UHAL', 'AMRH', 'AMRHW', 'ATAX', 'AMOV', 'AAL', 'ACSF', 'AETI', 'AMNB', 'ANAT', 'AOBC', 'APEI', 'ARII', 'AMRB', 'AMSWA', 'AMSC', 'AMWD', 'CRMT', 'ABCB', 'AMSF', 'ASRV', 'ASRVP', 'ATLO', 'AMGN', 'FOLD', 'AMKR', 'AMPH', 'IBUY', 'ASYS', 'AFSI', 'AMRS', 'ADI', 'ANAB', 'AVXL', 'ANCB', 'ANGI', 'ANGO', 'ANIP', 'ANIK', 'ANSS', 'ATRS', 'ANTH', 'APLS', 'APOG', 'APEN', 'AINV', 'AMEH', 'APPF', 'APPN', 'AAPL', 'ARCI', 'APDN', 'APDNW', 'AGTC', 'AMAT', 'AAOI', 'AREX', 'APTI', 'APRI', 'APVO', 'APTX', 'APTO', 'AQMS', 'AQB', 'AQXP', 'ARDM', 'ARLZ', 'PETX', 'ABUS', 'ARCW', 'ABIO', 'RKDA', 'ARCB', 'ACGL', 'ACGLO', 'ACGLP', 'FUV', 'ARCT', 'ARDX', 'ARNA', 'ARCC', 'ARGX', 'ARKR', 'ARTX', 'ARQL', 'ARRY', 'ARRS', 'DWCR', 'DWAT', 'AROW', 'ARWR', 'ASNS', 'ARTNA', 'ARTW', 'ASNA', 'ASND', 'ASCMA', 'APWC', 'ASLN', 'ASML', 'ASPU', 'AZPN', 'ASMB', 'ASFI', 'ASTE', 'ATRO', 'ALOT', 'ASTC', 'ASUR', 'ASV', 'ATAI', 'ATRA', 'ATHN', 'ATNX', 'ATHX', 'ATAC', 'ATACR', 'ATACU', 'AAME', 'ACBI', 'AY', 'ATLC', 'AAWW', 'AFH', 'AFHBL', 'TEAM', 'ATNI', 'ATOM', 'ATOS', 'ATRC', 'ATRI', 'ATIS', 'ATISW', 'ATTU', 'LIFE', 'AUBN', 'BOLD', 'AUDC', 'AUPH', 'EARS', 'ADSK', 'AUTL', 'ADP', 'AUTO', 'AVDL', 'ATXI', 'AVEO', 'AVNW', 'CDMO', 'CDMOP', 'AVID', 'AVGR', 'CAR', 'AHPA', 'AHPAU', 'AHPAW', 'AVT', 'AVRO', 'AWRE', 'ACLS', 'AXGN', 'AAXN', 'AXON', 'AXSM', 'AXTI', 'AYTU', 'AZRX', 'BCOM', 'RILY', 'RILYG', 'RILYH', 'RILYL', 'RILYZ', 'BOSC', 'BIDU', 'BCPC', 'BWINA', 'BWINB', 'BLDP', 'BANF', 'BANFP', 'BCTF', 'BAND', 'BOCH', 'BMRC', 'BMLP', 'BKSC', 'BOTJ', 'OZRK', 'BFIN', 'BWFG', 'BANR', 'BZUN', 'DFVL', 'DFVS', 'DLBL', 'DLBS', 'DTUL', 'DTUS', 'DTYL', 'DTYS', 'FLAT', 'STPP', 'TAPR', 'BHAC', 'BHACR', 'BHACU', 'BHACW', 'BBSI', 'BSET', 'BCML', 'BCBP', 'BECN', 'BBGI', 'BBBY', 'BGNE', 'BELFA', 'BELFB', 'BLPH', 'BLCM', 'BNCL', 'BNFT', 'BNTC', 'BNTCW', 'BYSI', 'BGCP', 'BGFV', 'BRPA', 'BRPAR', 'BRPAU', 'BRPAW', 'BILI', 'BASI', 'ORPN', 'BIOC', 'BCRX', 'BDSI', 'BFRA', 'BIIB', 'BHTG', 'BKYI', 'BIOL', 'BLFS', 'BLRX', 'BMRN', 'BMRA', 'BVXV', 'BVXVW', 'BPTH', 'BIOS', 'BSTC', 'BSPM', 'TECH', 'BEAT', 'BTAI', 'BCAC', 'BCACR', 'BCACU', 'BCACW', 'BJRI', 'BBOX', 'BRAC', 'BRACR', 'BRACU', 'BRACW', 'BLKB', 'BL', 'BKCC', 'BLNK', 'BLNKW', 'BLMN', 'BCOR', 'BLBD', 'BHBK', 'BLUE', 'BKEP', 'BKEPP', 'BPMC', 'ITEQ', 'BMCH', 'BOFI', 'BOFIL', 'WIFI', 'BOJA', 'BOKF', 'BOKFL', 'BNSO', 'BKNG', 'BRQS', 'BOMN', 'BPFH', 'BPFHW', 'EPAY', 'BOXL', 'BCLI', 'BVNSC', 'BDGE', 'BLIN', 'BWB', 'BRID', 'BCOV', 'BHF', 'AVGO', 'BVSN', 'BYFC', 'BWEN', 'BPY', 'BRKL', 'BRKS', 'BRKR', 'BMTC', 'BLMT', 'BSQR', 'BLDR', 'BFST', 'CFFI', 'CHRW', 'CA', 'CCMP', 'CDNS', 'CDZI', 'CZR', 'CSTE', 'PRSS', 'CLBS', 'CHY', 'CHI', 'CCD', 'CHW', 'CGO', 'CSQ', 'CAMP', 'CVGW', 'CALA', 'CALM', 'CLMT', 'CRUSC', 'CLXT', 'ABCD', 'CATC', 'CAC', 'CAMT', 'CSIQ', 'CGIX', 'CPHC', 'CPLA', 'CCBG', 'CPLP', 'CSWC', 'CSWCL', 'CPTA', 'CPTAG', 'CPTAL', 'CFFN', 'CAPR', 'CSTR', 'CPST', 'CARA', 'CBLK', 'CARB', 'CSII', 'CDLX', 'CATM', 'CDNA', 'CECO', 'CTRE', 'CARG', 'CARO', 'CART', 'CRZO', 'TAST', 'CARV', 'CASM', 'CASA', 'CWST', 'CASY', 'CASI', 'CASS', 'CATB', 'CBIO', 'CPRX', 'CATS', 'CATY', 'CATYW', 'CGVIC', 'CIVEC', 'CVCO', 'CAVM', 'CBFV', 'CBAK', 'CBOE', 'CBTX', 'CDK', 'CDTI', 'CDW', 'CECE', 'CELC', 'CELG', 'CELGZ', 'CLDX', 'APOP', 'APOPW', 'CLRB', 'CLRBW', 'CLRBZ', 'CLLS', 'CBMG', 'CLSN', 'CELH', 'CYAD', 'CETX', 'CETXP', 'CETXW', 'CDEV', 'CSFL', 'CETV', 'CFBK', 'CENT', 'CENTA', 'CVCY', 'CENX', 'CNBKA', 'CNTY', 'CRNT', 'CERC', 'CERCW', 'CERN', 'CERS', 'KOOL', 'CEVA', 'CSBR', 'CYOU', 'BURG', 'CTHR', 'GTLS', 'CHTR', 'CHFN', 'CHKP', 'CHEK', 'CHEKW', 'CHEKZ', 'CKPT', 'CEMI', 'CHFC', 'CCXI', 'CHMG', 'CHKE', 'CHFS', 'CHMA', 'CSSE', 'CSSEP', 'PLCE', 'CMRX', 'CADC', 'CALI', 'CAAS', 'CBPO', 'CCCL', 'CCCR', 'CCRC', 'JRJC', 'HGSH', 'CIFS', 'CJJD', 'CLDC', 'CHNR', 'CREG', 'CNTF', 'CXDC', 'CCIH', 'CNET', 'IMOS', 'CDXC', 'CHSCL', 'CHSCM', 'CHSCN', 'CHSCO', 'CHSCP', 'CHDN', 'CHUY', 'CDTX', 'CMCT', 'CMCTP', 'CMPR', 'CINF', 'CIDM', 'CTAS', 'CRUS', 'CSCO', 'CTRN', 'CTXR', 'CTXRW', 'CZNC', 'CZWI', 'CZFC', 'CIZN', 'CTXS', 'CHCO', 'CIVB', 'CIVBP', 'CLAR', 'CLNE', 'CACG', 'YLDE', 'LRGE', 'CLFD', 'CLRO', 'CLSD', 'CLIR', 'CLIRW', 'CMTA', 'CBLI', 'CLVS', 'CLPS', 'CMFN', 'CMSS', 'CMSSR', 'CMSSU', 'CMSSW', 'CME', 'CCNE', 'CWAY', 'COBZ', 'COKE', 'COCP', 'CODA', 'CDXS', 'CODX', 'CVLY', 'JVA', 'CCOI', 'CGNX', 'CTSH', 'CWBR', 'COHR', 'CHRS', 'COHU', 'CLCT', 'COLL', 'CIGI', 'CLGN', 'CBAN', 'COLB', 'CLBK', 'COLM', 'CMCO', 'CMCSA', 'CCNI', 'CBSH', 'CBSHP', 'CVGI', 'COMM', 'JCS', 'ESXB', 'CFBI', 'CYHHZ', 'CTBI', 'CWBC', 'CVLT', 'CGEN', 'CPSI', 'CTG', 'SCOR', 'CHCI', 'CMTL', 'CNAT', 'CNCE', 'CDOR', 'CFMS', 'CNFR', 'CNMD', 'CTWS', 'CNOB', 'CONN', 'CNSL', 'CWCO', 'CNAC', 'CNACR', 'CNACU', 'CNACW', 'ROAD', 'CPSS', 'CFRX', 'CTRV', 'CTRL', 'CVON', 'CVONW', 'IFON', 'CPRT', 'CRBP', 'CORT', 'CORE', 'CORI', 'CSOD', 'CORV', 'CRVL', 'CRVS', 'CSGP', 'COST', 'CPAH', 'ICBK', 'COUP', 'CVTI', 'COWN', 'COWNL', 'COWNZ', 'PMTS', 'CPSH', 'CRAI', 'CBRL', 'BREW', 'CRAY', 'CACC', 'DGLD', 'DSLV', 'GLDI', 'SLVO', 'TVIX', 'TVIZ', 'UGLD', 'USLV', 'USOI', 'VIIX', 'VIIZ', 'ZIV', 'CREE', 'CRESY', 'CRSP', 'CRTO', 'CROX', 'CRON', 'CCRN', 'CRWS', 'CYRX', 'CYRXW', 'CSGS', 'CCLP', 'CSPI', 'CSWI', 'CSX', 'CTIC', 'CTIB', 'CTRP', 'CUE', 'CUI', 'CPIX', 'CRIS', 'CUTR', 'CVBF', 'CVV', 'CYAN', 'CYBR', 'CYBE', 'CYCC', 'CYCCP', 'CBAY', 'CY', 'CYRN', 'CONE', 'CYTK', 'CTMX', 'CYTX', 'CYTXW', 'CYTXZ', 'CTSO', 'CYTR', 'DJCO', 'DAKT', 'DARE', 'DRIO', 'DRIOW', 'DZSI', 'DSKE', 'DSKEW', 'DAIO', 'DWCH', 'PLAY', 'DTEA', 'DFNL', 'DINT', 'DUSA', 'DWLD', 'DWSN', 'DBVT', 'DCPH', 'DFRG', 'TACO', 'TACOW', 'DMPI', 'DELT', 'DNLI', 'DENN', 'XRAY', 'DEPO', 'DDOC', 'DERM', 'DEST', 'DXLG', 'DSWL', 'DTRM', 'DXCM', 'DFBH', 'DFBHU', 'DFBHW', 'DHXM', 'DHIL', 'FANG', 'DCIX', 'DRNA', 'DFBG', 'DFFN', 'DGII', 'DMRC', 'DRAD', 'DGLY', 'APPS', 'DCOM', 'DIOD', 'DISCA', 'DISCB', 'DISCK', 'DISH', 'DVCR', 'SAUC', 'DLHC', 'BOOM', 'DNBF', 'DOCU', 'DOGZ', 'DLTR', 'DLPN', 'DLPNW', 'DGICA', 'DGICB', 'DMLP', 'DORM', 'DOVA', 'LYL', 'DOTA', 'DOTAR', 'DOTAU', 'DOTAW', 'DBX', 'DCAR', 'DRYS', 'DSPG', 'DLTH', 'DNKN', 'DRRX', 'DXPE', 'DYSL', 'DYNT', 'DVAX', 'ETFC', 'SSP', 'EBMT', 'EGBN', 'EGLE', 'EFBI', 'EGRX', 'EWBC', 'EACQ', 'EACQU', 'EACQW', 'EML', 'EAST', 'EASTW', 'EVGBC', 'EVSTC', 'EVFTC', 'EVLMC', 'OKDCC', 'EBAY', 'EBAYL', 'EBIX', 'ELON', 'ECHO', 'SATS', 'EEI', 'ESES', 'EDAP', 'EDGE', 'EDGW', 'EDIT', 'EDUC', 'EGAN', 'EGLT', 'EHTH', 'EIDX', 'EIGR', 'EKSO', 'LOCO', 'EMITF', 'ESLT', 'ERI', 'ESIO', 'EA', 'EFII', 'ELSE', 'ESBK', 'ELOX', 'ELTK', 'EMCI', 'EMCF', 'EMKR', 'EMMS', 'NYNY', 'ENTA', 'ECPG', 'WIRE', 'ENDP', 'ECYT', 'ELGX', 'NDRA', 'NDRAW', 'EIGI', 'WATT', 'EFOI', 'ERII', 'EGC', 'ENG', 'ENPH', 'ESGR', 'ENFC', 'ENTG', 'EBTC', 'EFSC', 'EPZM', 'PLUS', 'EQIX', 'EQFN', 'EQBK', 'ERIC', 'ERIE', 'ERYP', 'ESCA', 'ESPR', 'ESQ', 'ESSA', 'EPIX', 'ESND', 'ESTR', 'ESTRW', 'VBND', 'VUSE', 'VIDI', 'ETSY', 'CLWT', 'EDRY', 'EEFT', 'ESEA', 'EVLO', 'EVBG', 'EVK', 'MRAM', 'EVLV', 'EVOP', 'EVFM', 'EVGN', 'EVOK', 'EOLS', 'EVOL', 'EXAS', 'FLAG', 'ROBO', 'XELA', 'EXEL', 'EXFO', 'EXLS', 'EXPI', 'EXPE', 'EXPD', 'EXPO', 'ESRX', 'XOG', 'EXTR', 'EYEG', 'EYEGW', 'EYEN', 'EYPT', 'EZPW', 'FFIV', 'FB', 'DAVE', 'FANH', 'FARM', 'FMAO', 'FFKT', 'FMNB', 'FAMI', 'FARO', 'FAST', 'FAT', 'FATE', 'FBSS', 'FSAC', 'FSACU', 'FSACW', 'FNHC', 'FENC', 'GSM', 'FFBW', 'FCSC', 'FGEN', 'FDBC', 'ONEQ', 'LION', 'FDUS', 'FDUSL', 'FRGI', 'FITB', 'FITBI', 'FNGN', 'FISI', 'FNSR', 'FNJN', 'FNTE', 'FNTEU', 'FNTEW', 'FEYE', 'FBNC', 'FNLC', 'FRBA', 'BUSE', 'FBIZ', 'FCAP', 'FCFS', 'FCBP', 'FCNCA', 'FCBC', 'FCCO', 'FBNK', 'FDEF', 'FFBC', 'FFBCW', 'FFIN', 'THFF', 'FFNW', 'FFWM', 'FGBI', 'FHB', 'INBK', 'INBKL', 'FIBK', 'FRME', 'FMBH', 'FMBI', 'FNWB', 'FSFG', 'FSLR', 'FAAR', 'FPA', 'BICK', 'FBZ', 'FTHI', 'FCAL', 'FCAN', 'FTCS', 'FCEF', 'FCA', 'SKYY', 'RNDM', 'FDT', 'FDTS', 'FVC', 'FV', 'IFV', 'DWPP', 'DALI', 'FEM', 'RNEM', 'FEMB', 'FEMS', 'FTSM', 'FEP', 'FEUZ', 'FGM', 'FTGC', 'FTLB', 'HYLS', 'FHK', 'NFTY', 'FTAG', 'FTRI', 'LEGR', 'FPXI', 'YDIV', 'FJP', 'FEX', 'FTC', 'RNLC', 'FTA', 'FLN', 'LMBS', 'FMB', 'FMK', 'FNX', 'FNY', 'RNMC', 'FNK', 'FAD', 'FAB', 'MDIV', 'MCEF', 'FMHI', 'QABA'],
            stockPricesYesterday: [],
            maxProfit: 0
        }
    },

    methods: {
        maxProfitCalculator () {
            this.maxProfit = this.getMaxProfit(this.stockPricesYesterday)
        },
        getMaxProfit (arr) {
            var minIdx = 0
            var maxIdx = 1
            var currMin = 0
            var maxProfit = 0

            if (arr.length < 2) {
                throw new Error('Need atleast two time periods to be profitable!')
            }

            for (var i = 1; i < arr.length; i++) {
                // new current min.
                if (arr[i] < arr[currMin]) {
                    currMin = i
                }

                // new best profit
                if (arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
                    maxIdx = i
                    minIdx = currMin
                }
            }

            maxProfit = arr[maxIdx] - arr[minIdx]
            return maxProfit.toFixed(2)
        },
        showStockChart () {
            // authorization of intrinio data
            var self = this
            var auth = 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')

            var company = ''
            var dataForChart = []

            self.stockPricesYesterday = []
            self.maxProfit = ''

            var request = https.request({
                method: 'GET',
                host: 'api.intrinio.com',
                path: `/historical_data?identifier=${self.identifierSelected}&item=close_price&start_date=2017-06-01&end_date=2018-06-01&sort_order=asc&page_size=999`,
                headers: {
                    'Authorization': auth
                }
            }, (response) => {
                var json = ''
                response.on('data', function (chunk) {
                    json += chunk
                })
                response.on('end', function () {
                    company = JSON.parse(json)
                    // console.log(company)

                    // format data from history intrinio.com to the format using in HighCharts
                    company.data.forEach(function (str) {
                        var singleData = []
                        singleData.push(Date.parse(str.date))
                        singleData.push(str.value)
                        self.stockPricesYesterday.push(str.value)
                        dataForChart.push(singleData)
                    })

                    // Create the chart
                    Highcharts.stockChart('container', {
                        rangeSelector: {
                            selected: 1
                        },
                        title: {
                            text: self.identifierSelected
                        },
                        series: [{
                            name: self.identifierSelected,
                            data: dataForChart,
                            tooltip: {
                                valueDecimals: 2
                            }
                        }]
                    })
                })
            })
            request.end()
        }
    },
    watch: {
        identifierSelected: function () {
            this.showStockChart()
        }
    },
    mounted () {
    },
    created () {
        this.showStockChart()
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0
    }
    ul {
        list-style-type: none;
        padding: 0
    }
    li {
        display: inline-block;
        margin: 0 10px
    }
    a {
        color: #42b983
    }
</style>
