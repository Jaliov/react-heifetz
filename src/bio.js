/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './App.css';
// import PhotoDsply from './Photo';
import VideoDsply from './VideoLinks';

export class Bio extends Component {
  render() {
    const status = { level: 'The Greatest Violinist!' };
    return (
      <div
        style={{ backgroundColor: 'rgb(97, 11, 11, 0.2)', margin: '0 5% 0 5%' }}
      >
        <div id='main'>
          <h1 id='title'>
            {this.props.name}, {status.level}
          </h1>

          <h3 id='img-caption'>
            <em>
              Jascha Heifetz (February 2, 1901 - December 10, 1987), is
              universally acclaimed <br /> the greatest violinist that ever
              lived.
            </em>
          </h3>
          <p style={{ marginBottom: '75px' }}>
            <a href='#HeifetzClip'>Hear Heifetz play!</a>
          </p>
          <div className='tributeInfo'>
            <h3>General Timeline of Heifetz's Life and Career</h3>
            <p>
              <strong>1901:</strong> Born in Vilnius, Lithuania (then a part of
              Russia) on February 2 to Ruvin Heifetz and Anna Sharfstein.
            </p>
            <p>
              <strong>1906:</strong> Admitted to the Vilnius Music School in the
              Fall; first public performance at a student recital in December.
            </p>
            <p>
              <strong>1909:</strong> Played the Mendelssohn concerto and
              Sarasate’s “Faust Fantasy” in his professional debut at Kaunas
              (Kovno), Lithuania in May at age 7; graduated from the Vilnius
              Music School that spring.
            </p>
            <p>
              <strong>1911:</strong> First full recital at the Saint Petersburg
              Conservatory in April; made first recordings for Zvukopis in Saint
              Petersburg in May; his outdoor concerts in Odessa in August drew
              thousands of people; entered the violin class of Leopold Auer, a
              major violin teacher of the era, in the fall.
            </p>
            <p>
              <strong>1912:</strong> Gave first concerts in Warsaw, Poland,
              including three appearances with the Warsaw Philharmonic in
              January; recital debut in Berlin, Germany on May 19; Berlin
              Philharmonic debu; toured Germany, gave first concerts in Prague,
              and returned to Warsaw (October-December).
            </p>
            <p>
              <strong>1913:</strong> Continued his studies with Leopold Auer in
              Saint Petersburg and at Auer’s summer colony in Loschwitz,
              Germany; gave concerts in Berlin, Warsaw, Vilnius, and Kiev
              (October-December).
            </p>
            <p>
              <strong>1914:</strong> Performed the Glazunov concerto under the
              baton of the composer in February; toured Germany, Austria, and
              Hungary, including an appearance with the Leipzig Gewandhaus
              Orchestra (becoming the youngest violinist to appear with the
              orchestra since Joseph Joachim); temporarily stranded in Germany
              at the outset of World War I.
            </p>
            <p>
              <strong>1916:</strong> Toured Scandinavia after summer studies
              with Auer at Christiana (Oslo), Norway.
            </p>
            <p>
              <strong>1917:</strong> U.S. debut at Carnegie Hall on October 27
              with pianist André Benoist; made his first acoustic recordings for
              the Victor Talking Machine Company in November; Canadian debut on
              December 13 in Montreal.
            </p>
            <p>
              <strong>1920 - 1923:</strong> First concerts in England,
              Scotland,France, Australia, New Zealand, China and Japan.
            </p>
            <p>
              <strong>1925:</strong> Became a naturalized U.S. citizen in May;
              made his first electric recordings for Victor in December.
            </p>
            <p>
              <strong>1926:</strong> Embarked on a world tour in January that
              took him to the Netherlands, Germany, Hungary, Austria, Monaco,
              France, Spain, Portugal, Italy, Egypt, Palestine, Denmark, Sweden,
              Norway, and Latvia before returning to the United States in
              December; awarded the Cross of the French Legion of Honor
              (becoming the youngest person on the civil list to hold that
              distinction).
            </p>
            <p>
              <strong>1927:</strong> Continued on a world tour in January that
              took him to Spain, Egypt, India, Singapore, Hong Kong, the
              Philippines, Australia, New Zealand, Hawaii, the United States,
              and Mexico; wrote the first of many violin transcriptions (Ponce’s
              “Estrellita”).
            </p>
            <p>
              <strong>1928:</strong> Married the silent screen star Florence
              Vidor and adopted her daughter Suzanne; first concerts in
              Switzerland, Turkey, Romania, and Greece.
            </p>
            <p>
              <strong>1930:</strong> Daughter Josefa was born; made his first
              radio broadcast; performed at the White House for President
              Herbert Hoover.
            </p>
            <p>
              <strong>1932:</strong> Son Robert was born; world tour took him to
              Sumatra, India, Egypt, Palestine, Switzerland, Belgium, France,
              Austria, Hungary, Italy, Spain, Portugal, Poland, South Africa,
              the United States, and Canada; made experimental long play
              recordings for the Bell Telephone Laboratory.
            </p>
            <p>
              Gave last tour of Germany (just as Adolf Hitler became
              Chancellor).
            </p>
            <p>
              <strong>1934:</strong> Gave concerts in the Soviet Union for the
              first and only time since leaving Russia in 1917; performed at the
              White House for President Franklin Roosevelt.
            </p>
            <p>
              <strong>1936:</strong> Helped to found the American Guild of
              Musical Artists and served as its first vice president.
            </p>
            <p>
              <strong>1937:</strong> Gave the U.S. premiere of Prokofiev’s
              second violin concerto with Serge Koussevitzky and the Boston
              Symphony Orchestra.
            </p>
            <p>
              <strong>1939:</strong> Starred in the MGM movie,{' '}
              <em>They Shall Have Music</em>; gave the world premiere of the
              Walton violin concerto with Artur Rodzinski and the Cleveland
              Symphony Orchestra.
            </p>
            <p>
              <strong>1941:</strong> Gave benefit concerts for British War
              Relief and Russian War Relief, and participated in a radio
              broadcast sponsored by the U.S. Treasury to support the sale of
              Defense Bonds.
            </p>
            <p>
              <strong>1942:</strong> Gave USO concerts at military camps
              throughout the United States; made the first of 54 appearances
              (through 1958) on the NBC radio program “The Telephone Hour.”
            </p>
            <p>
              <strong>1943:</strong> Toured Central and South America for the
              USO and gave concerts at military bases and hospitals throughout
              the United States.
            </p>
            <p>
              <strong>1945:</strong> Toured England, France, Belgium,
              Luxembourg, and occupied Germany for the USO with pianist Seymour
              Lipkin, including a VE-Day concert in Beckum, Germany on May 8;
              filed for divorce from Florence Vidor in December.
            </p>
            <p>
              <strong>1946:</strong> toured United States, Mexico, and Cuba;
              published two popular songs under the pseudonym Jim Hoyl with the
              lyricist Marjorie Goetschius: one, “When You Make Love To Me
              (Don’t Make Believe”), became a hit (recorded by the likes of Bing
              Crosby, Helen Ward, and Margaret Whiting).
            </p>
            <p>
              <strong>1947:</strong> Married Frances Spiegelberg; gave world
              premiere of the Korngold violin concerto with Vladimir Golschmann
              at the Saint Louis Symphony; toured United States and gave
              concerts in England, France, Belgium, Switzerland, and Cuba.
            </p>
            <p>
              <strong>1948:</strong> Son Jay was born; took a sabbatical from
              the concert stage but gave four nationwide radio performances on
              NBC’s “The Telephone Hour.”
            </p>
            <p>
              <strong>1949:</strong> Resumed touring with concerts in the United
              States, Canada, England, France,and Cuba; gave a series of trio
              concerts with pianist Arthur Rubinstein and cellist Gregor
              Piatigorsky at the Ravinia Festival in Chicago; patent granted for
              the Heifetz Mute (developed with Henryk Kaston); made first
              television appearance on NBC’s “The Telephone Hour.”
            </p>
            <p>
              <strong>1950:</strong> Toured Israel and the United States; worked
              with Benjamin Britten on revisions to his violin concerto, but
              never publicly performed the work.
            </p>
            <p>
              <strong>1953:</strong> Returned to Israel for another tour and was
              attacked by a man wielding a metal pipe for playing the violin
              sonata by Richard Strauss (whose music was then banned in Israel);
              also gave concerts in England, Belgium, France, Italy, Portugal,
              Finland, Sweden, Norway, Cuba, and the United States.
            </p>
            <p>
              <strong>1954: </strong>Toured Japan and the United States, and
              gave concerts in Canada, England, and France; Brooks Smith became
              his accompanist.
            </p>
            <p>
              <strong>1957:</strong> Named a Commander of the French Legion of
              Honor.
            </p>
            <p>
              <strong>1958:</strong> Taught first experimental master class at
              UCLA; gave his last radio broadcast on “The Telephone Hour.”
            </p>
            <p>
              <strong>1959:</strong> Appointed Regent’s Professor of Music at
              UCLA; slipped on the floor at Nate ‘n Al’s Delicatessen in Beverly
              Hills and fractured his hip; a subsequent infection nearly killed
              him,but he accepted an invitation from Dag Hammarskjöld, the
              Secretary-General of the United Nations, to play at the Human
              Rights Day Concert in the UN General Assembly Hall in December.
            </p>
            <p>
              <strong>1960:</strong> Returned to the Hollywood Bowl with Leonard
              Bernstein and the New York Philharmonic.
            </p>
            <p>
              <strong>1961: </strong>Won the first of three Grammy Awards (the
              others came in 1962 and 1964) from the National Academy of
              Recording Arts and Sciences; gave a series of
              “Heifetz-Piatigorsky” chamber music concerts in Hollywood,
              California with violist William Primrose and other guest
              musicians.
            </p>
            <p>
              <strong>1962: </strong>Appointed Professor of Music at the
              University of Southern California’s Institute for Special Musical
              Studies where a series of his master classes were filmed;
              performed at the Paris Opera in a benefit for old musicians and
              made recordings in England; divorced Frances Spiegelberg; gave a
              series of Heifetz-Piatigorsky concerts in San Francisco with the
              pianist Leon Fleisher and other guest musicians.
            </p>
            <p>
              <strong>1963: </strong>Public Television aired the master class
              films; performed the Brahms double concerto at the Hollywood Bowl
              with Piatigorsky and the New York Philharmonic conducted by
              Leonard Bernstein; gave a series of Heifetz-Piatigorsky concerts
              at the Scottish Rite Auditorium in Los Angeles.
            </p>
            <p>
              <strong>1964:</strong> Returned to Carnegie Hall for the first
              time since 1956 for a series of Heifetz-Piatigorsky concerts;
              played the Beethoven concerto at the opening of the Dorothy
              Chandler Pavilion in Los Angeles with Zubin Mehta and the Los
              Angeles Philharmonic.
            </p>
            <p>
              <strong>1966:</strong> Gave his last concerts at Carnegie Hall,
              including a recital, an evening of chamber music, and concertos
              (the Conus violin concerto and the Brahms double with
              Piatigorsky).
            </p>
            <p>
              <strong>1967:</strong> Converted his Renault passenger car to an
              electric vehicle as part of an effort to combat air pollution;
              performed with the Israel Philharmonic at the Hollywood Bowl.
            </p>
            <p>
              <strong>1970: </strong>Returned to Israel where he gave recitals
              and appeared with Piatigorsky; filmed performances in Paris with
              Brooks Smith and the French National Orchestra for an NBC
              television broadcast that aired in 1971.
            </p>
            <p>
              <strong>1972:</strong> Chamber music concert at USC with
              Piatigorsky and students; gave his final recital with Brooks Smith
              at the Dorothy Chandler Pavilion in Los Angeles, which was
              recorded and issued by Columbia Records.
            </p>
            <p>
              <strong>1974:</strong> Last two public performances at USC with
              Piatigorsky and students.
            </p>
            <p>
              <strong>1975:</strong> A shoulder injury ended his public
              performing career, but he continued to play chamber music with
              students and friends for the rest of his life.
            </p>
            <p>
              <strong>1978: </strong>Transcribed two excerpts from Prokofiev’s
              Music for Children, Op. 65 which he published in memory of Gregor
              Piatigorsky.
            </p>
            <p>
              <strong>1983:</strong> Stopped teaching at USC, but continued to
              teach privately.
            </p>
            <p>
              <strong>1987: </strong>Died December 10 at Cedars-Sinai Medical
              Center in Los Angeles.
            </p>
            <p>
              <strong>1989:</strong> Posthumously received the Grammy Lifetime
              Achievement Award from the National Academy of Recording Arts and
              Sciences.
            </p>
            <a
              id='tribute-link'
              href='https://en.wikipedia.org/wiki/Jascha_Heifetz'
              target='_blank'
            >
              Discover more about Heifetz here{' '}
            </a>
            <h3>Example of Heifetz's Remarkable Violin Playing</h3>
            <div>
              <div id='HeifetzClip'>
                <VideoDsply />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
