document.addEventListener('DOMContentLoaded', function () {
    const studentData = [
 { id: "20229501087", name: "  Abdallah Wesam Abdallah Alqasem ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20221501100", name: "  Abdel Rahman Bashar Abdel Rahman Obied ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20211402086", name: "  Abdel Rahman Khaled Mohammad Rezeq ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20221501068", name: "  Abdelrahman Mohammed Ahmad Herzallah ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20239501015", name: "  Abdelrahman Moh'd Hamed  Qazzaz ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20222402090", name: "  Abdrahman Youniss Khalil Elhamaida ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20221404051", name: "  Ahmad Maher Rajeh Habboush ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20231401007", name: "  Ahmad Majed Masoud Abuzouwr ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20221501094", name: "  Ahmad Moayad Adel Bello ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20231501151", name: "  Ahmad Waleed Mustafa Al-Madhoun ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20239405039", name: "  Ayah Mahmoud Masoud Nayfeh ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20221502111", name: "  Baha' Hatem Sabri Al-Halabi ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20221404020", name: "  Bashar Ala' Abdulraheem Abuelaish ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20212601034", name: "  Dina Arkan Yousif Yousif ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20231602009", name: "  Etaf Hussein Abdel Hadi Al-Bashiti ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20221402036", name: "  Oan Khaled Mohammad Aldabaibeh ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20231401014", name: "  Omran Jafar Mohammad Jafar ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20221501145", name: "  Osama Monther Hasan Alhushki ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20239402107", name: "  Otorshan Firas Ahed Alrajabi ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20239103015", name: "  Aleen Mutaz Munir Al-Ali ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20242302063", name: "  Ali Yasir Shamil Al-Sammaraiy ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20229601002", name: "  Ali Yousef Ali Alhindawi ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20221405174", name: "  Amer Nidal Awad Fakhoury ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20221405176", name: "  Amro Mohannad Ali (Alfaqir Alrabab'a) ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C402" },
{ id: "20239402093", name: "  Issa Rami Issa Alrabi ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20231602004", name: "  Jessica Khader Fuad Abualzollf ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20231402082", name: "  Julia Esam Mone'm Khader ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20239501006", name: "  Karam Ahmad Mustafa Ali ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20232401004", name: "  Lareen Mohamad Said  Khalil ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20219302046", name: "  Rnad Nidal Ghanem Elashhab ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20211402129", name: "  Tala Nabil A. Hashem ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20239504032", name: "  Yamen Ziyad Mohammad Abonade ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20231505022", name: "  Yamin Omar Mohamed Abu Hawash ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20221402076", name: "  Yana Atef Jeries Nasraween ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20229402016", name: "  Zaid Feras Musallam Al-Taweil ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20211402032", name: "  Zaid Ibrahiem Sulieman Abuelwan ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20231601004", name: "  Zain Sanad Salman Algosos ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20229404031", name: "  Mohammad Amjad Ma'moun Ma'abreh ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20239505016", name: "  Mohammad Nourai Hisham Mousa Alslman ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20231402114", name: "  Mohammad Ra'ad Mohammad Al-Smadi ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20231501127", name: "  Noor Ma'an Ali Obeidat ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20239301077", name: "  Noura Ghassan Ibrahim Hammad ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C408" },
{ id: "20239602057", name: "  Farah Mosaddaq Farhan Nadi ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20221405075", name: "  Fayiz Saad Mnawar Alawamleh ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20209402069", name: "  Hala Riad Mufleh Ajarmeh ", section: "  D4-1", lecturer: " Ramze Al-Ozieb", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20239405003", name: "  Hashim Tariq Ahmad Batal ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20231103115", name: "  Issa Hussein Issa Al Awawdeh ", section: "  D4-2", lecturer: " Amani Alzaro", date: "   03. Aug.", time: " 14:30-16:00", lab: "    C403" },
{ id: "20239203060", name: "  (Majddien) Hafez Ghaleb Mahmoud ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20231501193", name: "  Abdallah  Bader Ibrahim Albtoosh ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20221701045", name: "  Abdallah Abed Alfattah Saleem Abubaker ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20239103017", name: "  Abdallah Issam Jalal Elamaireh ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20231302063", name: "  Abdallah Soud Abed Alhafith Farraj ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20231103105", name: "  Abdel Rahman Maher Naeem Ba'arah ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20219601050", name: "  Abdel Rahman Mohammad  Talab Atallah ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20241103153", name: "  Abdel Rahman Mohammad Mustafa Musalam ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20241501121", name: "  Abdul Rahman Belal Hashem Aldabet ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20231402071", name: "  Abdullah Aiman Yousef Alnajar ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20239203040", name: "  Ahmad Rami Mahmoud Habash ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20221405146", name: "  Ahmed Said Ahmed Qahwaji ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20231702019", name: "  Farah Salameh Abdullah Khaled ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20221203053", name: "  Fares Omar Abdel Rahman Albourini ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20249301036", name: "  Ghena  Mohammad Ghassan M.th Al-Monla  ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20239103089", name: "  Hamad Mohmmad Walid Saleem Erekat ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20229405051", name: "  Hamzah Ahmad Rebhi Al-Husseini ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20231502131", name: "  Hamzeh Jamil Ahmad Mustafa ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20241404064", name: "  Hashem Khaldoun Mohammad Aldweikat ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20239402064", name: "  Hashem Mazen Turki Elqadi ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20221404034", name: "  Hashim Khaled Khalaf Alhadid ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20241501036", name: "  Husein Ahmad Hussein Alkharabsheh ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20231505023", name: "  Imam Ra'ed Mohammad Alkhateeb ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20221102070", name: "  Izzeldeen Hani Adnan Almathloom ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20221405087", name: "  Leen Awwad Ahmad Alawaideh ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231103144", name: "  Loai Husam Ali Al-Amayreh ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20239602056", name: "  Lolowah Ibrahim M Albalawi ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231102062", name: "  Mahmoud Zafer Yacoub Tabakhi ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231602038", name: "  Marah Ahmad Mohammad Alebous  ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20229501155", name: "  Marshan Walid Jamal Kataw ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231701010", name: "  Awn Salem Mustafa Alnsour ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20239103167", name: "  Bushra Mazen Abdelrahim Farah ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20231402011", name: "  Dalin Haitham Ahmad Alshaboul ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20229402002", name: "  Dana Ahmad Abdel Rahman  Abuelsamen ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20232103127", name: "  Ebrahim Ahmed Abdulwahab Al-Shehari ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20221105033", name: "  El-Moutaz Bi Allah Ahmad T. Al-Jammal ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C403" },
{ id: "20219301036", name: "  Marwah Farid Mahmoud Wildali ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20239501147", name: "  Mohammad Abdullah Mudhi Al-Issa ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231501092", name: "  Mohammad Jamal Yaseen Hassan ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20239401029", name: "  Mohammad Khaldon Ibrahim Amro ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20249103195", name: "  Mohammad Ra'ed Sa'ad Almaghariz ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20239103002", name: "  Mohammad Samer Zaki Sa'adeh ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20229105034", name: "  Mohammad Talal Abdul Kareem Badawi ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20221501183", name: "  Mohammad Ziad Obedallah El Buriqi ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231103166", name: "  Moh'd Ahmad Ali Al-Jundi ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231401017", name: "  Nathier Basheer Sameer Tahboub ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20222404048", name: "  Obay Salah Abdallah Esgaer ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20249602045", name: "  Omar Saad Abdallah Abuolaim ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20241505016", name: "  Osamah Fozat Eid Alkhaza'leh ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20229405195", name: "  Qais  Ahmad Jamil Es Salim ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231404051", name: "  Qais Khaled Jamal Obeid ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20241402118", name: "  Ragad Ahmad Abdelhadi Alfauri ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231505025", name: "  Rama Jihad Ahmad Hakij ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20232501219", name: "  Saif Aldeen K. S. Abdallah ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20211402041", name: "  Sohiab Naser Ali Althawabeyeh ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231501053", name: "  Sultan Ghassan Saleh Abujnaib Alfayez ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231501209", name: "  Thakla Tariq Sami Alfayez ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20239402119", name: "  Waseem Firas Ahed Al Rajabi ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20241406035", name: "  Yousef Mohammad Fouad Hammoudeh ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20241402112", name: "  Yousef Saleh Mohammad Khashan ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231102021", name: "  Zaid Fatehi Mohammad Abufares ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231103114", name: "  Zaid Suleiman Khalaf Aldabaibeh ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20241401015", name: "  Zain Al-Abdeen Jamal Ghaleb Alsukkar ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20239103045", name: "  Zeena Saleh Kamel Al Omari ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20239602017", name: "  Zeina Ahmad Mohd Ghazi Abusoufeh ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C408" },
{ id: "20231206003", name: "  Ala Badei Tawfiq Shahrouri ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20229103023", name: "  Ali Jamil Ali Mujahed  ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20231602062", name: "  Alisar Mohammed Adel Shapsough ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20239105032", name: "  Ammar Rami Ahmad Alamrat ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20231402116", name: "  Aryam Knean Ata Alblowi ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20229405065", name: "  Aseel Mohammad Mustafa Aladaileh ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C402" },
{ id: "20239402004", name: "  Jamil Ahmed Jamil Hasan ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231702014", name: "  Jana Mahmoud Ibrahim Alomari ", section: "  D3-2", lecturer: " Yassine Tawart", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231701027", name: "  Joud Ibrahim Farhat Al-Said ", section: "  D3-3", lecturer: " Osman Khalil", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20239103189", name: "  Jude Ahmad Moh'd Obeidat ", section: "  D3-4", lecturer: " Salma Ahmed", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231405080", name: "  Khaled Hasan Abdel Hamid Alraggad ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20201105075", name: "  Khaled Hussam Abdlhalim Al Ibrahim ", section: "  D3-1", lecturer: " Tareq Refaie", date: "   05. Aug.", time: " 16:00-17:30", lab: "    C407" },
{ id: "20231901087", name: "  Heba Mousa Abdalkareem Alzubi ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901070", name: "  Mohammad Ahmad Abdel Rahman Alshqeirat ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901094", name: "  Mohammad Saleem Hamad Aziz ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901097", name: "  Rand Omar Ali Quran ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901050", name: "  Suhib Majed Subhi Yousef ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901100", name: "  Tamara Eyad Hamed Altarawneh ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901104", name: "  Abedelaziz Husam Abedelaziz Arabiat ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901113", name: "  Adrian Safa Latif Alkhori ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901028", name: "  Bahaa Amjed Salim Alhatamleh ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901046", name: "  Baha'adeen Issa Khalaf Alrawahneh ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901081", name: "  Halla Ahmed Yahya Akrimeen ", section: "  D5 NU-1", lecturer: " Ehtisabliallah Abdalmotal", date: "   06. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241501158", name: "  Mohammad Ahid Nayef Alqatarneh ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231405101", name: "  Mohammad Ayman Saqr Alkrimeen ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20241901046", name: "  Mohammadnour Emad Abdulsalam Alsarayreh ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20242406040", name: "  Mohammed S. S. Abuafash ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20241901018", name: "  Mohannad Qais Mahmoud Almasa'afeh ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20241505008", name: "  Rayan N. S. Abuelayyan ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20249302074", name: "  Saif Eddien Mohnnad A. Al Haleek ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20241901020", name: "  Shahed Akef Fayez Alajarmeh ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20249405119", name: "  Tamer Nazmi Ali Abuabed ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20249405112", name: "  Waleed Tareq Waleed Elamaireh ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901120", name: "  Abdelmajid Eyad Abdelmajid Alqaisi ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20241501162", name: "  Aktham Khaled Mohammad Zureigat ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20241702031", name: "  Basmle Adel Mohammad Alshawabkeh ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231701054", name: "  Durgham Zaher Khaled Al Hadeed ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231602058", name: "  Leen Fayez Saleh Al-Sakarnah ", section: "  D1-1", lecturer: " Sarah Obeidat", date: "   06. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901006", name: "  Abdel Rahman Okbah Abdalkareem Almtareen ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901098", name: "  Abdullah Omar Ali Alzrigat ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901039", name: "  Anas  Malek  Yousef  Alqaryouti  ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901101", name: "  Esraa Tariq Ahmad Alshanour ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20239901088", name: "  Malak Mohammad Barakat Alzyoud ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901109", name: "  Mays Hassan Hamedallah Alkharabsheh  ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901090", name: "  Noor Riyad Rashed Almaiah ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901017", name: "  Farah Samer Hilmi Drak ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901015", name: "  Khaled Abdallah Khaled Alsmadi ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901005", name: "  Mohamad Ismail Suleiman Shqairat ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901003", name: "  Noor  George Hane Al Ajeilat ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901023", name: "  Rana Ibrahim  Mousa Hamad ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901036", name: "  Salah Aldeen Hamed Mohmmad Alshaban ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901002", name: "  Sanad Moh'd Ghandi A.karim Maqableh ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901006", name: "  Sohaib Ali Sudqi Alazzam ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901034", name: "  Abdallah Marwan Ahmad Almharat ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20242901001", name: "  Ahmad  H. A. Abumarie  ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901009", name: "  Ahmed Mohammad Salem Alshawabkeh ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901064", name: "  Ayham Tariq Mahmoud Alhisseh ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20241901021", name: "  Dana Laith  Mohammad Alnaser ", section: "  D3 Nu-2", lecturer: " Maryam Al Qwidari", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901019", name: "  Sami Ali Ayed Almasadeh ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901111", name: "  Sondos Emad Jamal Al Omari ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901071", name: "  Zaid  Ra'ed Suleiman Al-Shbielat ", section: "  D3 Nu-1", lecturer: " Omar Alduais", date: "   11. Aug.", time: " 09:00-10:30", lab: "    L208" },
{ id: "20231901112", name: "  Abd-Alrahman Wael Mohammad Ammar ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901017", name: "  Ahmad Atif Ahmad Barham ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901072", name: "  Lujain Ibrahim Muflih Albawareid ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901096", name: "  Mohammad Tareq Suleiman Heyasat ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901135", name: "  Omar Ahmad Haza' Glilat ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901051", name: "  Osama Adnan Y. Ben Tarife ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901025", name: "  Qatada Mohammad Ahmad Naanah ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901116", name: "  Qusai Atef Abdel Karim Albtoosh ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901013", name: "  Rama Nayel Ali Salem ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901084", name: "  Raya Bader Musallam Khazaaleh ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901079", name: "  Sa'ed Talal Fahid Alsharafat ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20241901045", name: "  Yamen Yaser Hasan Omar ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
{ id: "20231901086", name: "  Yousef Mohammad Hasan  Bawa'neh  ", section: "  D4 NU-1", lecturer: " Bushra Tarawneh", date: "   11. Aug.", time: " 11:30-13:00", lab: "    L208" },
  
    ];

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const studentInfo = document.getElementById('studentInfo');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('closePopupBtn');

    function displayStudentInfo(student) {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        for (const key in student) {
            if (Object.hasOwnProperty.call(student, key)) {
                const tr = document.createElement('tr');
                const th = document.createElement('th');
                const td = document.createElement('td');

                th.textContent = key;
                td.textContent = student[key];

                tr.appendChild(th);
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
        }

        table.appendChild(tbody);
        studentInfo.innerHTML = '';
        studentInfo.appendChild(table);
    }

    function searchStudent(id) {
        const student = studentData.find(student => student.id === id);
        if (student) {
            displayStudentInfo(student);
        } else {
            studentInfo.innerHTML = '<p>Student not found</p>';
        }
    }

    searchBtn.addEventListener('click', function () {
        const id = searchInput.value.trim();
        if (id !== '') {
            searchStudent(id);
        } else {
            studentInfo.innerHTML = '<p>Please enter a student ID</p>';
        }
    });

    // Popup functionality
    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Display popup on page load
    window.onload = function () {
        popup.style.display = 'block';
    };
});
