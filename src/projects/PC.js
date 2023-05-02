import Grid from '@mui/material/Grid'; 


function PC(){
    return(
        <div>
            <p> &emsp;&emsp;It has been a dream of mine to build my own desktop PC. I am fascinated at the intricacy of building PCs, from learning about the different parts, to knowing how to put them together. I’ve heard people say that it is very simple, and it is just plug and play. However, going through the experience of building my own PC has been a rewarding experience, because I learned a lot about computer hardware and the specific details that I learned about each component.</p>
            <p> &emsp;&emsp;This is what my PC looks like:</p>
            <img src='https://i.imgur.com/wbKbOkH.jpg' alt='PC Final' style={{width:'100%',maxWidth:'560px'}} />
            <p> &emsp;&emsp;I built this PC on November of 2021. Before starting the build, I spent time watching Youtube videos and looking into a lot of the PC builds people have created. This Youtube video is the main video that I used as my guide to build my PC. This guide provides the most detailed step-by-step process of building a PC. I highly recommend this video from TechSource. I will go over all the parts that I picked and the things that I’ve learned throughout this experience, and hopefully this will help people when building their own PCs.</p>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/PXaLc9AYIcg' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen /> 
            <p> &emsp;&emsp;For my parts, I used <a href='https://pcpartpicker.com/list/wn9kvf' target='_blank' rel="noreferrer">PCPartsPicker.com</a>. PC parts picker is a good website because it checks the compatibility of all the components for you. If there is a problem with the parts, such as compatibility, it will tell you at the bottom of the page. It is a very handy tool especially for beginners like me because I don’t know the specifics of each part and how they might not be compatible with each other. Some of the components that I used in this build are not listed on the website because it is not available on the list provided by the website. </p>
            <h2>Parts that I have used:</h2>
            <ul>
                <li><a href='#CPU'>Central Processing Unit (CPU)</a></li>
                <li><a href='#GPU'>Graphics Processing Unit (GPU)</a></li>
                <li><a href='#Motherboard'>Motherboard</a></li>
                <li><a href='#Case'>Case</a></li>
                <li><a href='#Power_Supply'>Power Supply</a></li>
                <li><a href='#RAM'>Random Access Memory (RAM)</a></li>
                <li><a href='#Storage'>Storage (HDD/SSD)</a></li>
                <li><b>Peripherals</b></li>
                <ul>
                    <li><a href='#Monitor'>Monitor</a></li>
                    <li><a href='#Keyboard'>Keyboard/Mouse</a></li>
                    <li><a href='#Audio'>Audio</a></li>
                </ul>
                <li><b>Others</b></li>
                <ul>
                    <li><a href='#CPU_Fan'>CPU Fan</a></li>
                    <li><a href='#Case_Fan'>Case Fan</a></li>
                    <li><a href='#LED'>LED lights</a></li>
                    <li><a href='#PCIE'>USB-C PCIe</a></li>
                </ul>
            </ul>
            <h2 id='CPU'><b><u>Central Processing Unit (CPU)</u></b></h2>

            <img src='https://i.imgur.com/BqjiSOn.jpg' alt='Ryzen 7 CPU' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>Ryzen 7 3700X</figcaption>

            <p>&emsp;&emsp;The Central Processing Unit (CPU) is the heart of the computer. It is the part that handles all the general computation of the computer. It would be an understatement to say that this is one of the most important components of the system. Therefore, this would be one of the components that need the utmost thought when building your PC.</p>
            <p>&emsp;&emsp;For the installation, in my opinion, this is the most nerve-wracking part of the PC building process. The CPU has pins at the bottom that goes into the holes of the CPU mount in the motherboard. Those pins are easily bent if the CPU is placed incorrectly. Both the CPU and the CPU mount have a triangular-shaped indicator. This will align the CPU correctly to the mount. The trick to putting the CPU into the mount is to never use force. The CPU should slide itself into the holes when correctly placed. For me, because it is the most nerve-wracking part, it also gives me great pleasure watching videos of people putting their CPUs into their motherboards.</p>
            <p>Things to know: There are two brands, Intel and AMD.</p>
            <p>Fun fact: AMD has a CPU called the Threadripper. The top line has 64 cores, which means that it has insane computing power. It is definitely a marvel to watch the current peak of machine computation.</p>

            <h2 id='GPU'><b><u>Graphics Processing Unit (CPU)</u></b></h2>

            <img src='https://i.imgur.com/duI22PQ.jpg' alt='MSI RTX 3060 GPU' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>MSI GeForce RTX 3060 Ventus 2x </figcaption>

            <p>&emsp;&emsp;If the CPU is the most nerve-wracking part of the process, the Graphics Processing Unit (GPU) is the most wallet-busting part in a gaming PC. Because of the chip shortage, crypto miners, and hoarders, there is a huge shortage of GPUs and they cost a fortune nowadays. The GPU is the component that provides the graphics in the computer. Therefore, if there is a workload that uses graphics, like image/video editing or gaming, investing in a good GPU is very important. Another use of GPUs is in intense computations. This includes machine learning and crypto mining.</p>
            <p>&emsp;&emsp;Installing the GPU is easy. In the case, there is a back plate that is needed to be removed. Then, there is a latch on the Peripheral Component Interconnect Express (PCIe) slot. It needs to be opened and the GPU can be gently pushed into the slot. A screw is provided to secure the GPU to the back of the case. An advice when installing GPUs is to place it at the topmost PCIe slot. One thing I noticed with this GPU is that it has one HDMI slot and 3 Display port slot. I never owned a DisplayPort to HDMI wire, so I needed to purchase one so that I can use multiple monitors.</p>
            <p>Things to know: AMD also has GPUs, but as currently, Nvidia is still the best brand of GPU to buy.</p>
            <p>Fun fact: GPU prices are inflated due to cryptocurrency mining. The MSRP for my GPU is $500. I had to buy it at around $800.</p>
            
            <h2 id='Motherboard'><b><u>Motherboard</u></b></h2>

            <img src='https://i.imgur.com/e9WTCxl.png' alt='ASUS TUF B450 Motherboard' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>ASUS TUFB450-PLUS II Motherboard</figcaption>

            <p>&emsp;&emsp;The motherboard is the part of the PC that holds everything together. This is where all of the wires and components will be plugged into. Therefore, picking a motherboard is important. There are several questions when picking a motherbord: </p>
            <ol>
            <li>What is the CPU?</li>
            <p> &emsp;&emsp;This is important because AMD and intel have different sockets, and thus, have different motherboards. The motherboard and the CPU will have to match. </p>
            <li>How many RAM slots is needed?</li>
            <p> &emsp;&emsp;Typically, motherboards have 4 RAM slots. Some high-end computers have 8 or more RAM slots. </p>
            <li>What is the size of the motherboard?</li>
            <p> &emsp;&emsp;Motherboards come in different sizes. 
                These are ATX, Micro-ATX, and the Mini-ITX. Smaller motherboards can be mounted on bigger cases, but not the other way around. Smaller motherboards will have 
                fewer slots for PCIE and other slots. 
            </p>
            <li>What other features are included in the motherboad?</li>
            <p> &emsp;&emsp; An example of a feature is the number of PCIe lanes available and how much slot per lane is available. Some PCIe slots only have 1 x 16 slots, while others have 4x 16 slots. GPUs require a 4x 16 PCIe slot. Another example is if there is an M.2 SSD slot in the motherboard. Other features include WiFi and Bluetooth connectivity, and other connectors such as SATA connectors, USB connectors, and RGB connectors. </p>
            </ol>
            <p> &emsp;&emsp;Installing the motherboard is straightforward. The case has a mount that puts a gap between the case and the motherboard. The motherboard just needs to be screwed into the case. One awesome tip I got when dealing with the motherboard assembly is to put as much as I can into the motherboard before screwing it into the case. In my case, I made sure that my RAM and my CPU Fan is already attached to my motherboard before putting my motherboard inside the case.</p>
            <p>Things to know: There is a possibility that the motherboard will not have all the socket that you need. If it does not have the socket, you can look for PCIe cards or controllers to compensate for the missing socket.</p>
            <p>Problems I encountered: My case has a USB-C port beside the power button. My motherboard does not have the connection for the USB-C. I had to buy a USB-C PCIE card so that I can use my case’s USB-C socket. Also, my motherboard does not have an ARGB socket. It only has an RGB socket.</p>
            
            <h2 id='Case'><b><u>Case</u></b></h2>

            <img src="https://i.imgur.com/lHDDBGr.jpg" alt='Corsair 4000D PC Case' style={{width:'100%',maxWidth:'240px', justifyContent:'center'}}/> 
            <figcaption>Corsair 4000D PC Case</figcaption>
            
            <p> &emsp;&emsp;The case is one of the parts 
            of the computer where you can experiment. The only technical details with regards to the case is to make sure that all of the components fit inside the case and that the components get enough air flowing inside. Other than that, it is a 
            matter of aesthetics. In terms of aesthetics, good PC cases will have a nice tempered glass to show the components. The case should also provide a good way to manage the cables. For my build, I chose the Corsair 4000D ATX PC Case (White). What I like about this case is the tempered glass, as well as the easy cable 
            management at the back because it provided mounts and velcro tapes. 
            </p>

            <h2 id='Power_Supply'><b><u>Power Supply</u></b></h2>

            <img src='https://i.imgur.com/usOCwGK.jpg' alt='EVGA 550 B5 Power Supply' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>EVGA 550 B5 Power Supply</figcaption>

            <p>&emsp;&emsp;The power supply provides power 
            to the whole computer. It has a lot of wires that goes to the different parts of the PC. When choosing the power supply, I followed the suggestion from <a href='https://pcpartpicker.com' target='_blank' rel="noreferrer">PCPartsPicker.com</a> PCPartsPicker automatically computes the amount of wattage needed by the computer. Besides 
            this, another detail to consider is whether to get a modular or non-modular power supply. The main difference between the two is that the wires in a modular power supply can be removed, while the wires from non-modular power supplies cannot be removed. Because of this, it is easier to manage the cables because if the wire is not needed, it does not need to be attached to the power supply. I chose the <b>EVGA 550 B5 Power Supply</b>. 
            </p>
            <p> &emsp;&emsp;When I was researching about Power Supplies. I came across a review about a power supply that explodes (<a href='https://youtu.be/aACtT_rzToI' target='_blank' rel="noreferrer">Youtube</a>). One warning when looking into power supplies is to not buy a power supply because it is cheap. It is the failsafe for the rest of the computer. If the failsafe fails, the more important parts of the computer might get damaged. </p>
            
            <h2 id='RAM'><b><u>Random Access Memory (RAM)</u></b></h2>

            <img src='https://i.imgur.com/ipM38ZJ.jpg' alt='G.SKills Ripjaws DDR4 RAM' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>G.Skill Ripjaws RAM</figcaption>

            <p> &emsp;&emsp; Random Access Memory (RAM) is the short-term memory of the computer. It stores the data that needs to be quickly accesed by the computer. The RAM goes into the dual in-line memory module (DIMM) slot of the motherboard. There are three specifications to consider when picking memory slots. The first one is the generation of the RAM. It is labeled ad Double Data Rate (DDR). DDR currently has 5 generations. It is important that the generation is compatible with the motherboard. The next specs is the memory size. This allows the computer to run applications at the same time. Last is the memory speed. 
            This facilitates the data transfer in terms of reading and writing data to and 
            from the RAM. Some RAMs have RGB LEDs on top of the stick. In my case, I chose 
            to forgo the LEDs, which is why I chose the <b>G.Skill Ripjaws</b>. This has two 8GB memory size and 3600MHz memory speed. 
            </p>
            
            <h2 id='Storage'><b><u>Storage</u></b></h2>

            <Grid container spacing={6} sx={{ mt: 0 }}> 
                <Grid item xs={4}>
                <img src='https://i.imgur.com/eNf0hwc.jpg' alt='Samsung 860 Evo M.2 SSD' style={{width:'100%',maxWidth:'240px'}}/> 
                <figcaption>Samsung V-NAND SSD 860 EVO</figcaption>
                </Grid>
                <Grid item xs={6}>
                <img src='https://i.imgur.com/AAaDBgv.jpg' alt='Teamgroup SSD' style={{width:'100%',maxWidth:'240px'}}/> 
                <figcaption>TeamGroup AX2 SSD</figcaption>
                </Grid>
            </Grid>

            <p> &emsp;&emsp;The storage is where the long-term memory is stored. This is where all the files are 
            stored. Traditionally, it is done by the hard disk drive (HDD). However, recent advances in technology gave rise to Solid State Drives (SSD). Solid state drives are faster and safer for transfer. It is recommended to install the Operating System (OS) into the SSD so that it would boot faster. However, HDDs can still be used and can provide extra storage, especially to files that are not that 
            important. For my build, I reused my storages from my laptop and placed it in my PC desktop. I have the <b>Samsung V-NAND SSD 860 EVO</b> and a HDD, and I bought the <b>TeamGroup AX2 SSD</b> for a total of 3 TB worth of storage. 
            </p>


            <h2 id='Monitor'><b><u>Monitor</u></b></h2>

            <img src='https://i.imgur.com/i6Tkbjn.jpg' alt='Samsung Odyssey Monitor' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>Samsung Odyssey 24in monitor</figcaption>

            <p> &emsp;&emsp;For the monitor, I wanted a 144 Hz refresh rate for my monitor and a slightly curved monitor so I picked up the <b>Samsung Odyssey 24in monitor</b> . </p>
            
            <h2 id='Keyboard'><b><u>Keyboard/Mouse</u></b></h2>

            <img src='https://i.imgur.com/TmL0Zv1.jpg' alt='Heroic Bundle' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>Razer Heroic Bundle</figcaption>

            <p> &emsp;&emsp;I got the <b>Razer Heroic Bundle</b> from Costco. The Razer Heroic Bundle includes the <b>Razer Blackwidow V3</b> keyboad, the <b>Razer DeathAdder V2 Pro</b> mouse, the <b>Razer Gigantus V2 mousepad</b>, and grip tapes. One thing to note about this bundle is I had to return this bundle twice because 
            it had defects when I got the first two. The keyboard is wired while the mouse 
            can be used wired or wireless. Both items are RGB programmable. Personally, what I like about the keyboard is its clicking sounds and its responsiveness. 
            </p>
           
            <h2 id='Audio'><b><u>Audio</u></b></h2>

            <img src='https://i.imgur.com/Vdujsq5.jpg' alt='JBL Flip 2' style={{width:'100%',maxWidth:'120px'}}/> 
            <figcaption>JBL Flip 2</figcaption>

            <p> &emsp;&emsp;For my audio, I am using my <b>JBL Flip 2</b> which I got in 2015 as a credit for trading in my phone. It hasn't been used in a while, so I'm putting it to good use now. 
            </p>

            <h2 id='CPU_Fan'><b><u>CPU Fan</u></b></h2>

            <img src='https://i.imgur.com/RkTJsJL.jpg' alt='Wraith Prism Cooler' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>Wraith Prism CPU Fan</figcaption>

            <p> &emsp;&emsp;CPU fans are used to cool the CPU. If the CPU fan is not present, the CPU ca reach 
            a certain temperature, which is very bad for the CPU. There are multiple ways to cool the CPU. Traditionally cooling fans can be used to cool the CPU. Recently, All-in-One (AIO) cooling has been a more popular way of cooling the CPU. AIO uses a radiator and tubes that contain liquid to cool the CPU. This is much better because water cooling can drastically lower the temperature. Some other builds uses the water cooling as aesthetics to their build. In my case, since my 
             <a href='#CPU'>CPU</a> has provided a free CPU fan, I opted to just use the stock fan from AMD. The stock CPU fan in the <b>Wraith Prism CPU Fan</b>. Between 
            the CPU fan and the CPU plate, a thermal paste needed to be applied. I have a thermal paste ready, but the Wraith Prism already had thermal paste pre-applied. Also, Wraith Prism has programmable RGB ring and inner fan. The two RGB parts 
            can be programmed with different colors. 
            </p>
            
            <h2 id='Case_Fan'><b><u>CPU Fan</u></b></h2>

            <img src='https://i.imgur.com/bFBnVeC.jpg' alt='Arctic P12 PWM Case Fan' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>Arctic P12 PWM fans</figcaption>

            <p> &emsp;&emsp;For the case fan, besided the two stock fans provided by the <a href='#Case'>case</a>, I added 3 <b>Arctic P12 PWM fans</b> to the case to provide better airflow. Fans come in multiple sizes. The P12 and the P14 are the most common. According to my research, smaller fans are better because they provide better airflow. </p>
            
            <h2 id='LED'><b><u>LED Lights</u></b></h2>

            <img src='https://i.imgur.com/KtENLvL.jpg' alt='LED' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>LED Strip Light</figcaption>

            <p> &emsp;&emsp; A friend gave me this <b>LED Strip Light</b> gift for Christmas. Since my motherboard has 4-pin 12V RGB header, I decided to cut half of this and line it inside my PC case. </p>
            
            <h2 id='PCIE'><b><u>PCIe USB-C</u></b></h2>

            <img src='https://i.imgur.com/Xem1sYo.jpg' alt='PCIe USB-C' style={{width:'100%',maxWidth:'240px'}}/> 
            <figcaption>PCIe USB-C Card</figcaption>

            <p> &emsp;&emsp; I got this <b>PCIe USB-C</b> because of the problem I've encountered with the <a href='#Motherboard'>motherboard</a>. The motherboard does not have an USB-C slot which means that my USB-C on my <a href='#Case'>case</a> will be dead. I want to utilize all of my sockets on my case which is why I got the card. This is 
            an altenate solution to the weaknesses of the motherboard that I got. 
            </p>
            
            <h2><b><u>Conclusion</u></b></h2>
            <p> &emsp;&emsp;I thoroughly enjoyed building my 
            PC. The experience is definitely worth it and I would recommend people to try it at least once. I have learned so much about hardware and about building PCs. 
            I am mainly using this PC now to do everything, from gaming, to coding and watching tv shows. I hope that in the future, I can keep on modifying my PC to add 
            more features to enhance my experience. 
            </p>
        </div>
    )
}

export default PC